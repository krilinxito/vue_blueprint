<template>
  <el-table :data="ciudades" stripe style="width: 100%">
    <el-table-column prop="id_ciudad" label="ID" width="180" />
    <el-table-column prop="nombre" label="Name" width="180" />
    <el-table-column prop="poblacion" label="poblacion" />
    <el-table-column prop="region" label="region"  />
     <el-table-column prop="idPais" label="region"  />
    <el-table-column label="acciones">
        <template #default="scope">
             <el-button @click="abrirModalEditar(scope.row)" type="text" size="small">Editar</el-button>
            <el-button @click="EliminarCiudades(scope.row.id_ciudad)" type="text" size="small">Eliminar</el-button>
        </template>
</el-table-column>

  </el-table>
  <el-dialog v-model="dialogVisible" title="Editar Ciudad">
  <el-form :model="ciudadEditada" label-width="120px">
    <el-form-item label="Nombre">
      <el-input v-model="ciudadEditada.nombre" />
    </el-form-item>
    <el-form-item label="Población">
      <el-input v-model="ciudadEditada.poblacion" />
    </el-form-item>
    <el-form-item label="Región">
      <el-input v-model="ciudadEditada.region"/>
    </el-form-item>
  </el-form>

  <template #footer>
    <el-button @click="dialogVisible = false">Cancelar</el-button>
    <el-button type="primary" @click="guardarCambios">Guardar</el-button>
  </template>
</el-dialog>
<br>
<CiudadAdd @newCiudad="obtenerCiudades"></CiudadAdd>
</template>

<script setup>
const dialogVisible = ref(false)        
const ciudadEditada = ref({})  
import {ref, onMounted} from 'vue'
import {getAllCiudadesRequest, deleteCiudadRequest, updateCiudadRequest} from '../API/ciudad.api.js'
import CiudadAdd from './CiudadAdd.vue'
const ciudades = ref([])
const obtenerCiudades = async () => {
    try{
        const response = await getAllCiudadesRequest()
        ciudades.value = response.data
    }catch (error) {
        console.error('Error fetching ciudades:', error)
    }   
}
const abrirModalEditar = (ciudad) => {
  ciudadEditada.value = { ...ciudad } 
  dialogVisible.value = true
}
const guardarCambios = async () => {
  try {
    await updateCiudadRequest(ciudadEditada.value.id_ciudad, ciudadEditada.value)
    dialogVisible.value = false
    await obtenerCiudades()
  } catch (error) {
    console.error('Error al guardar cambios:', error)
  }
}
const EliminarCiudades = async (id_ciudad) => {
  try {
    await deleteCiudadRequest(id_ciudad)
    await obtenerCiudades()
  } catch (error) {
    console.error('Error eliminando ciudad:', error)
  }
}

onMounted(() => {
    obtenerCiudades()
})
defineExpose({
    obtenerCiudades,
})
</script>
<style scoped>
</style>