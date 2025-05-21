<template>
  <el-header class="app-header">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Logo" />
      <span>Biblioteca</span>
    </div>
    <div class="nav-links">
      <el-button type="text" @click="goTo('/')">Paises</el-button>
      <el-button type="text" @click="goTo('/ciudades')">Ciudades</el-button>
    </div>
  </el-header>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goTo(path) {
  router.push(path)
}
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #409EFF;
  color: white;
  padding: 0 20px;
  height: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 30px;
  margin-right: 10px;
}

.logo span {
  font-weight: bold;
  font-size: 18px;
  color: white;
}
.nav-links
{
  display: flex;
  flex-direction: row;
}
.nav-links .el-button {
  color: white;
  margin-left: 10px;
}
</style>
