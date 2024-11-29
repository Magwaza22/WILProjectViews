<template>
  <aside class="sidebar">
    <router-link to="/" class="sidebar-link">Home</router-link>
    <router-link to="/management" class="sidebar-link">Management</router-link>
    <router-link to="/tracking" class="sidebar-link">Track Now</router-link>
    <router-link to="/register" class="sidebar-link">Register</router-link>
    <router-link to="/login" class="sidebar-link">Login</router-link>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  background-color: #f8f9fa;
  padding: 10px;
  width: 200px;
  border-right: 1px solid #ccc;
}
.sidebar-link {
  display: block;
  padding: 10px 0;
  color: #333;
  text-decoration: none;
}
.sidebar-link:hover {
  background-color:  #648ba8;
}
</style>
