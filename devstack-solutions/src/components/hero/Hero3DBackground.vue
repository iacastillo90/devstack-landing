<template>
  <div ref="containerRef" class="absolute inset-0 w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLDivElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
type CodeCube = {
  mesh: THREE.Mesh
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D | null
  drops: number[]
  cols: number
  charSize: number
}
let codeCubes: CodeCube[] = []
let particlesGroup: THREE.Points | null = null
let animationFrameId = 0
let mouse = { x: 0, y: 0 }

const CODE_CHARS = '01{}()<>/;=+-_[]abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function createCodeCanvas(width = 128, height = 256, charSize = 12) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const cols = Math.floor(width / charSize)
  const drops: number[] = []
  for (let i = 0; i < cols; i++) drops[i] = Math.random() * height

  ctx.clearRect(0, 0, width, height)
  ctx.fillStyle = 'rgba(0,0,0,0)'
  ctx.fillRect(0, 0, width, height)
  ctx.font = `${charSize}px monospace`
  return { canvas, ctx, drops, cols, charSize }
}

function updateCodeCanvas(cube: CodeCube) {
  const { canvas, ctx, drops, cols, charSize } = cube
  if (!ctx) return

  // fade background slightly for trails
  ctx.fillStyle = 'rgba(0,0,0,0.16)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.textBaseline = 'top'

  for (let i = 0; i < cols; i++) {
    const x = i * charSize
    // ensure drops[i] is a number
    if (typeof drops[i] !== 'number') drops[i] = Math.random() * canvas.height
    const y = Math.floor(drops[i] as number)
    const lines = 1 + Math.floor(Math.random() * 3)
    for (let l = 0; l < lines; l++) {
      const ch = CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)] ?? ''
      ctx.fillStyle = l === 0 ? '#39ff14' : 'rgba(57,255,20,0.6)'
      ctx.fillText(String(ch), x, (y - l * charSize + canvas.height) % canvas.height)
    }
    drops[i] = (drops[i] as number) + 4 + Math.random() * 6
    if ((drops[i] as number) > canvas.height + Math.random() * 200) drops[i] = -Math.random() * 300
  }
}

const initScene = () => {
  if (!containerRef.value) return
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x020617)
  const width = containerRef.value.clientWidth || window.innerWidth
  const height = containerRef.value.clientHeight || window.innerHeight
  camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 2000)
  camera.position.z = 140

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  const l1 = new THREE.PointLight(0x113355, 1.2)
  l1.position.set(200, 200, 200)
  scene.add(l1)
  const l2 = new THREE.PointLight(0x332244, 0.8)
  l2.position.set(-200, -150, 100)
  scene.add(l2)
  scene.add(new THREE.AmbientLight(0x222233, 0.5))

  createMatrixCubes()
  createParticles()

  window.addEventListener('resize', onWindowResize)
  document.addEventListener('mousemove', onMouseMove)
  animate()
}

function createMatrixCubes() {
  const grid = 4
  const gap = 18
  for (let xi = -grid; xi <= grid; xi++) {
    for (let yi = -grid; yi <= grid; yi++) {
      if (Math.random() > 0.55) continue
      const size = 6 + Math.random() * 8
      const geometry = new THREE.BoxGeometry(size, size, size)
      const canvasInfo = createCodeCanvas(128, 256, 12)
      if (!canvasInfo) continue
      const texture = new THREE.CanvasTexture(canvasInfo.canvas)
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.repeat.set(1, 1)

      const materialArray: THREE.Material[] = []
      for (let i = 0; i < 6; i++) {
        materialArray.push(new THREE.MeshBasicMaterial({ map: texture, transparent: true }))
      }

      const mesh = new THREE.Mesh(geometry, materialArray)
      mesh.position.set(xi * gap + (Math.random() - 0.5) * 6, yi * gap + (Math.random() - 0.5) * 6, -Math.random() * 300)
      ;(mesh as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.03,
      }
      scene.add(mesh)
      codeCubes.push({ mesh, canvas: canvasInfo.canvas, ctx: canvasInfo.ctx, drops: canvasInfo.drops, cols: canvasInfo.cols, charSize: canvasInfo.charSize })
    }
  }
}

function createParticles() {
  const count = 500
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 1200
    positions[i * 3 + 1] = (Math.random() - 0.5) * 600
    positions[i * 3 + 2] = -Math.random() * 800
    colors[i * 3] = 0.05
    colors[i * 3 + 1] = 0.9
    colors[i * 3 + 2] = 0.2
  }
  const geom = new THREE.BufferGeometry()
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geom.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  const mat = new THREE.PointsMaterial({ size: 1.5, vertexColors: true, transparent: true, opacity: 0.9 })
  particlesGroup = new THREE.Points(geom, mat)
  scene.add(particlesGroup)
}

function animate() {
  animationFrameId = requestAnimationFrame(animate)
  codeCubes.forEach((c) => {
    updateCodeCanvas(c)
    const mat = (c.mesh.material as THREE.Material[])[0] as THREE.MeshBasicMaterial
    if (mat && mat.map) (mat.map as THREE.CanvasTexture).needsUpdate = true
    const s = (c.mesh as any).rotationSpeed
    c.mesh.rotation.x += s.x
    c.mesh.rotation.y += s.y
    c.mesh.rotation.z += s.z
    c.mesh.position.y += Math.sin(performance.now() * 0.002 + (c.mesh.position.x % 10)) * 0.08
  })
  if (particlesGroup) particlesGroup.rotation.y += 0.001
  camera.position.x += (mouse.x * 40 - camera.position.x) * 0.04
  camera.position.y += (-mouse.y * 30 - camera.position.y) * 0.04
  camera.lookAt(scene.position)
  renderer.render(scene, camera)
}

function onMouseMove(e: MouseEvent) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
}

function onWindowResize() {
  if (!containerRef.value) return
  const w = containerRef.value.clientWidth
  const h = containerRef.value.clientHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}

onMounted(() => initScene())

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize)
  document.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(animationFrameId)
  codeCubes.forEach((c) => {
    try { (c.mesh.material as THREE.Material[]).forEach((m) => { if ((m as any).map) (m as any).map.dispose() }) } catch {}
  })
  try { renderer.dispose() } catch {}
  if (containerRef.value && renderer.domElement.parentNode === containerRef.value) containerRef.value.removeChild(renderer.domElement)
})
</script>

