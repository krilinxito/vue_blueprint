<template>
  <el-table :data="paises" stripe style="width: 100%">
    <el-table-column prop="id_pais" label="ID" width="180" />
    <el-table-column prop="nombre" label="Name" width="180" />
    <el-table-column prop="capital" label="capital" />
    <el-table-column prop="continente" label="continente"  />
    <el-table-column label="acciones">
        <template #default="scope">
             <el-button @click="abrirModalEditar(scope.row)" type="text" size="small">Editar</el-button>
            <el-button @click="EliminarPaises(scope.row.id_pais)" type="text" size="small">Eliminar</el-button>
        </template>
</el-table-column>

  </el-table>
  <el-dialog v-model="dialogVisible" title="Editar Autor">
  <el-form :model="autorEditado" label-width="120px">
    <el-form-item label="Nombre">
      <el-input v-model="autorEditado.nombre" />
    </el-form-item>
    <el-form-item label="Capital">
      <el-input v-model="autorEditado.capital" />
    </el-form-item>
    <el-form-item label="Continente">
      <el-input v-model="autorEditado.continente"/>
    </el-form-item>
  </el-form>

  <template #footer>
    <el-button @click="dialogVisible = false">Cancelar</el-button>
    <el-button type="primary" @click="guardarCambios">Guardar</el-button>
  </template>
</el-dialog>
<br>
<AutorAdd @newPais="obtenerPaises"></AutorAdd>
</template>

<script setup>
import AutorAdd from './AutorAdd.vue'
const dialogVisible = ref(false)        
const autorEditado = ref({})  
import {ref, onMounted} from 'vue'
import {getAllPaisesRequest, deletePaisRequest, updatePaisRequest} from '../API/pais.api.js'
const paises = ref([])
const obtenerPaises = async () => {
    try{
        const response = await getAllPaisesRequest()
        paises.value = response.data
    }catch (error) {
        console.error('Error fetching paises:', error)
    }   
}
const abrirModalEditar = (pais) => {
  autorEditado.value = { ...pais } 
  dialogVisible.value = true
}

const guardarCambios = async () => {
  try {
    await updatePaisRequest(autorEditado.value.id_pais, autorEditado.value)
    dialogVisible.value = false
    await obtenerPaises()
  } catch (error) {
    console.error('Error al guardar cambios:', error)
  }
}
const EliminarPaises = async (id_pais) => {
  try {
    await deletePaisRequest(id_pais)
    await obtenerPaises()
  } catch (error) {
    console.error('Error eliminando pais:', error)
  }
}

onMounted(() => {
    obtenerPaises()
})
defineExpose({
    obtenerPaises,
})
</script>
