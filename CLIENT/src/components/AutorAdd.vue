<template>
  <el-button plain @click="dialogFormVisible = true">
    Añadir Autor
  </el-button>
  <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
    <el-form :model="form" :rules="rules" ref="formRef" @submit.prevent="EnviarPais">
      <el-form-item label="nombre" :label-width="formLabelWidth" prop="nombre">
        <el-input v-model="form.nombre" autocomplete="off" />
      </el-form-item>
      <el-form-item label="capital" :label-width="formLabelWidth" prop="capital">
        <el-input v-model="form.capital" autocomplete="off" />
      </el-form-item>
      <el-form-item label="continente" :label-width="formLabelWidth">
        <el-input v-model="form.continente" autocomplete="off" />
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
import { createPaisRequest } from '../API/pais.api.js'

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const emit = defineEmits(['newPais'])

const form = reactive({
  nombre: '',
  capital: '',
  continente: '',
})

const formRef = ref(null)

const rules = {
  nombre: [
    { required: true, message: 'El nombre es obligatorio', trigger: 'blur' },
    { pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,100}$/, message: 'Solo letras, entre 2 y 100 caracteres', trigger: 'blur' }
  ],
  capital: [
    { required: true, message: 'La capital es obligatoria', trigger: 'blur' },
    { pattern: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,100}$/, message: 'Solo letras, entre 2 y 100 caracteres', trigger: 'blur' }
  ]
}

const EnviarPais = async () => {
  formRef.value.validate(async (valid) => {
    if (!valid) return

    try {
      const response = {
        ...form,
        nombre: form.nombre,
        nacionalidad: form.capital,
        fecha_nacimiento: form.continente,
      }
      await createPaisRequest(response)
      dialogFormVisible.value = false
      emit('newPais')
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    }
  })
}
</script>
