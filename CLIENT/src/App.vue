<script setup>
import Header from './components/Header.vue'
import { ref } from 'vue'

const paisListRef = ref(null) 
const actualizar = () => {
  paisListRef.value?.obtenerPaises()
}
</script>

<template>
  <Header />
  <br>
  <main>
    <router-view />
  </main>
</template>
<style scoped>
</style>




