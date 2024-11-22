<template>
  <header class="navbar">
    <div class="logo">
      <img src="../assets/logo.jpeg" alt="Logo" class="logo-image" />
    </div>
    <nav class="nav-links">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/about" class="link">About Us</router-link>
      <router-link to="/contact" class="link">Contact Us</router-link>
      <router-link to="/profile" class="profile">Profile</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #648ba8;
  color: white;
}
.nav-links {
  display: flex;
  gap: 10px;
}
.link {
  color: white;
  text-decoration: none;
}
.profile {
  background-color: white;
  color: black;
  padding: 5px 10px;
  border-radius: 50%;
}
.logo-image {
  height: 40px;
}
</style>
