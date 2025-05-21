<template>
  <el-header class="app-header">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Logo" />
      <span>Biblioteca</span>
    </div>
  </el-header>
</template>

<script setup>
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

.nav-links .el-button {
  color: white;
  margin-left: 10px;
}
</style>
