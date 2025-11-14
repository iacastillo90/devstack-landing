<template>
  <Card class="lg:col-span-2 card-hover relative overflow-hidden">
    <!-- Background glow effect -->
    <div class="absolute inset-0 opacity-0 hover:opacity-50 transition-opacity duration-500 pointer-events-none" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(6, 182, 212, 0.02) 100%)"></div>

    <!-- Toast de éxito -->
    <Toast
      :show="submitted"
      type="success"
      message="¡Mensaje enviado exitosamente! Te contactaremos pronto."
      @close="submitted = false"
    />

    <!-- Formulario -->
    <form @submit.prevent="submitForm" class="space-y-6 relative z-10">
      <!-- Nombre y Email -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Nombre"
          :error="errors.name"
          required
        >
          <Input
            v-model="form.name"
            placeholder="Tu nombre completo"
            type="text"
          />
        </FormField>

        <FormField
          label="Email"
          :error="errors.email"
          required
        >
          <Input
            v-model="form.email"
            placeholder="tu@email.com"
            type="email"
          />
        </FormField>
      </div>

      <!-- Teléfono y Servicio -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Teléfono"
          :error="errors.phone"
          hint="Opcional"
        >
          <Input
            :model-value="form.phone ?? ''"
            @update:model-value="form.phone = $event"
            placeholder="+56 9 XXXXXXXX"
            type="tel"
          />
        </FormField>

        <FormField
          label="Servicio"
          :error="errors.service"
          required
        >
          <Select
            v-model="form.service"
            placeholder="Selecciona un servicio"
            :options="serviceOptions"
          />
        </FormField>
      </div>

      <!-- Presupuesto -->
      <FormField
        label="Presupuesto Estimado"
        required
      >
        <Select
          v-model="form.budget"
          :options="budgetOptions"
        />
      </FormField>

      <!-- Mensaje -->
      <FormField
        label="Mensaje"
        :error="errors.message"
        :hint="errors.message ? 'Mínimo 20 caracteres' : 'Cuéntame sobre tu proyecto'"
        required
      >
        <Textarea
          v-model="form.message"
          placeholder="Describe tu proyecto o necesidad..."
          :rows="5"
        />
      </FormField>

      <!-- Botón Submit -->
      <Button
        variant="primary"
        size="lg"
        class="w-full bg-gradient-primary hover:shadow-xl-glow"
        :loading="isLoading"
        :disabled="!isValid || isLoading"
        label="Enviar Mensaje 🚀"
      />
    </form>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContactForm } from '@composables/useContactForm'
import { SERVICES, BUDGET_RANGES } from '@utils/constants'
import FormField from '@components/ui/FormField.vue'
import Input from '@components/ui/Input.vue'
import Textarea from '@components/ui/Textarea.vue'
import Select from '@components/ui/Select.vue'
import Button from '@components/ui/Button.vue'
import Card from '@components/ui/Card.vue'
import Toast from '@components/ui/Toast.vue'

const { form, errors, isLoading, submitted, isValid, submitForm } = useContactForm()

const serviceOptions = computed(() =>
  SERVICES.map((s) => ({
    value: s.id,
    label: s.title,
  }))
)

const budgetOptions = computed(() =>
  BUDGET_RANGES.map((b) => ({
    value: b.range,
    label: b.label,
  }))
)
</script>

