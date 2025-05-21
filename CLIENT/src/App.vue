<script setup>
import AutorList from './components/AutorList.vue'
import AutorAdd from './components/AutorAdd.vue'
import Header from './components/Header.vue'
import { ref } from 'vue'

const autorListRef = ref(null) 
const actualizar = () => {
  autorListRef.value?.obtenerAutores()
}
</script>

<template>
  <Header />
  <br>
  <main>
    <AutorList ref="autorListRef" /> 
    <br>
    <AutorAdd @newAutor="actualizar" />
  </main>
</template>
<style scoped>
</style>