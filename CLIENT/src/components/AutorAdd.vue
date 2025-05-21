<template>
      <el-button plain @click="dialogFormVisible = true">
        Añadir Autor
    </el-button>
    <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
    <el-form :model="form" @submit.prevent="EnviarAutor()">
      <el-form-item label="nombre" :label-width="formLabelWidth">
        <el-input v-model="form.nombre" autocomplete="off" />
      </el-form-item>
      <el-form-item label="nacionalidad" :label-width="formLabelWidth">
        <el-input v-model="form.nacionalidad" autocomplete="off" />
      </el-form-item>
      <el-form-item label="fecha_nacimiento" :label-width="formLabelWidth">
        <el-date-picker v-model="form.fecha_nacimiento" type="date" placeholder="Pick a date" />
      </el-form-item>
      <el-form-item label="biografia" :label-width="formLabelWidth">
        <el-input v-model="form.biografia" type="textarea" autocomplete="off" />
      </el-form-item>
        <el-button type="primary" native-type="submit">
          Confirm
        </el-button>
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
import { createAutorRequest} from '../api/autor.api.js'
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const emit = defineEmits(['newAutor'])
const form = reactive({
  nombre: '',
  nacionalidad: '',
  fecha_nacimiento: null,
  biografia: '',
})
const EnviarAutor = async() => {
  try {
    const response = {
        ...form,
        nombre: form.nombre,
        nacionalidad: form.nacionalidad,
        fecha_nacimiento: form.fecha_nacimiento,
        biografia: form.biografia,
    }
    await createAutorRequest(response)
    dialogFormVisible.value = false
    emit('newAutor')
  }catch (error) {
    console.error('Error al enviar el formulario:', error)
  }
}
</script>
<style scoped>  
</style>