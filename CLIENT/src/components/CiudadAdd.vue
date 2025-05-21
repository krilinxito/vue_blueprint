<template>
  <el-button plain @click="dialogFormVisible = true">
    Añadir Ciudad
  </el-button>
  <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
    <el-form 
      :model="form" 
      :rules="rules" 
      ref="formRef" 
      @submit.prevent="EnviarCiudad"
    >
      <el-form-item label="nombre" :label-width="formLabelWidth" prop="nombre">
        <el-input v-model="form.nombre" autocomplete="off" />
      </el-form-item>
      <el-form-item label="población" :label-width="formLabelWidth" prop="poblacion">
        <el-input v-model="form.poblacion" autocomplete="off" />
      </el-form-item>
      <el-form-item label="región" :label-width="formLabelWidth" prop="region">
        <el-input v-model="form.region" autocomplete="off" />
      </el-form-item>
      <el-button type="primary" native-type="submit">Confirm</el-button>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { createCiudadRequest } from '../API/ciudad.api.js'

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const emit = defineEmits(['newCiudad'])

const form = reactive({
  nombre: '',
  poblacion: '',
  region: '',
})

const formRef = ref(null)

const rules = {
  nombre: [
    { required: true, message: 'El nombre es obligatorio', trigger: 'blur' },
    { pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,100}$/, message: 'Solo letras, entre 3 y 100 caracteres', trigger: 'blur' }
  ],
  region: [
    { required: true, message: 'La región es obligatoria', trigger: 'blur' },
    { pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,100}$/, message: 'Solo letras, entre 3 y 100 caracteres', trigger: 'blur' }
  ],
}

const EnviarCiudad = async () => {
  formRef.value.validate(async (valid) => {
    if (!valid) return

    try {
      const response = {
        ...form,
      }
      await createCiudadRequest(response)
      dialogFormVisible.value = false
      emit('newCiudad')
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    }
  })
}
</script>
