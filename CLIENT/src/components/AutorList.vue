<template>
  <el-table :data="autores" stripe style="width: 100%">
    <el-table-column prop="id_autor" label="ID" width="180" />
    <el-table-column prop="nombre" label="Name" width="180" />
    <el-table-column prop="nacionalidad" label="nacionalidad" />
    <el-table-column prop="fecha_nacimiento" label="fecha_nacimiento" :formatter="formatearFecha" />
    <el-table-column prop="biografia" label="biografia" />
    <el-table-column label="acciones">
        <template #default="scope">
             <el-button @click="abrirModalEditar(scope.row)" type="text" size="small">Editar</el-button>
            <el-button @click="EliminarAutores(scope.row.id_autor)" type="text" size="small">Eliminar</el-button>
            <el-button @click="obtenerLibrosPorAutor(scope.row.id_autor)" type="text" size="small">Ver Libros</el-button>
        </template>
</el-table-column>

  </el-table>
  <el-dialog v-model="dialogVisible" title="Editar Autor">
  <el-form :model="autorEditado" label-width="120px">
    <el-form-item label="Nombre">
      <el-input v-model="autorEditado.nombre" />
    </el-form-item>
    <el-form-item label="Nacionalidad">
      <el-input v-model="autorEditado.nacionalidad" />
    </el-form-item>
    <el-form-item label="Fecha de nacimiento">
      <el-date-picker v-model="autorEditado.fecha_nacimiento" type="date" placeholder="Seleccione fecha" />
    </el-form-item>
    <el-form-item label="Biografía">
      <el-input type="textarea" v-model="autorEditado.biografia" />
    </el-form-item>
  </el-form>

  <template #footer>
    <el-button @click="dialogVisible = false">Cancelar</el-button>
    <el-button type="primary" @click="guardarCambios">Guardar</el-button>
  </template>
</el-dialog>

<el-dialog v-model="dialogLibrosVisible" :title="`Libros de ${nombreAutorSeleccionado}`">
  <template v-if="librosDelAutor.length > 0">
    <el-table :data="librosDelAutor" style="width: 100%">
    <el-table-column prop="id_libro" label="ID" width="80" />
    <el-table-column prop="titulo" label="Título" width="180" />
    <el-table-column prop="año_publicacion" label="Año de Publicación" width="140" />
    <el-table-column prop="genero" label="Género" width="160" />
    <el-table-column prop="resumen" label="Resumen" width="200" />
    </el-table>
  </template>
  <template v-else>
    <p>Este autor no tiene libros registrados.</p>
  </template>

  <template #footer>
    <el-button @click="dialogLibrosVisible = false">Cerrar</el-button>
  </template>
</el-dialog>
</template>

<script setup>
function formatearFecha(row) {
  const fecha = new Date(row.fecha_nacimiento)
  const year = fecha.getFullYear()
  const month = String(fecha.getMonth() + 1).padStart(2, '0')
  const day = String(fecha.getDate()).padStart(2, '0')
  return `${day}-${month}-${year}`
}
const dialogVisible = ref(false)        
const autorEditado = ref({})  
const dialogLibrosVisible = ref(false)
const librosDelAutor = ref([])
const nombreAutorSeleccionado = ref('')
import {ref, onMounted} from 'vue'
import {getAllAutoresRequest, deleteAutorRequest, updateAutorRequest} from '../API/autor.api.js'
import { getLibroByIdAutorRequest } from '../API/libro.api.js'
const autores = ref([])
const obtenerAutores = async () => {
    try{
        const response = await getAllAutoresRequest()
        autores.value = response.data
    }catch (error) {
        console.error('Error fetching autores:', error)
    }   
}
const abrirModalEditar = (autor) => {
  autorEditado.value = { ...autor } 
  dialogVisible.value = true
}
const obtenerLibrosPorAutor = async (id_autor) => {
  try {
    dialogLibrosVisible.value = true;
    const response = await getLibroByIdAutorRequest(id_autor)
    librosDelAutor.value = response.data
    const autor = autores.value.find(a => a.id_autor === id_autor)
    nombreAutorSeleccionado.value = autor?.nombre || 'Autor desconocido'
    dialogLibrosVisible.value = true
  } catch (error) {
    console.error('Error al obtener libros del autor:', error)
  }
}
const guardarCambios = async () => {
  try {
    await updateAutorRequest(autorEditado.value.id_autor, autorEditado.value)
    dialogVisible.value = false
    await obtenerAutores()
  } catch (error) {
    console.error('Error al guardar cambios:', error)
  }
}
const EliminarAutores = async (id_autor) => {
  try {
    await deleteAutorRequest(id_autor)
    await obtenerAutores()
  } catch (error) {
    console.error('Error eliminando autor:', error)
  }
}

onMounted(() => {
    obtenerAutores()
})
defineExpose({
    obtenerAutores,
})
</script>
