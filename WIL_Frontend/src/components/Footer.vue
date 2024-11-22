<template>
  <footer class="footer">
    <div>
      <p>Contact us</p>
      <p>Call Centre: +27 21 959 6767</p>
      <p>Email: info@cput.ac.za</p>
      <router-link to="/contact" class="link">More contact details</router-link>
    </div>
    <div>
      <p>Connect with us</p>
      <div class="icons">
        <a href="#"><img src="../assets/instagram.png" alt="Instagram" class="icon-image" /></a>
        <a href="#"><img src="../assets/facebook.png" alt="Facebook" class="icon-image" /></a>
        <a href="#"><img src="../assets/twitter.png" alt="Twitter" class="icon-image" /></a>
        <a href="#"><img src="../assets/youtube.png" alt="YouTube" class="icon-image" /></a>
      </div>
      <p>All our official Social Media channels</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #648ba8;
  color: white;
  padding: 20px;
  text-align: center;
}
.icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.icon-image {
  width: 30px;
}
</style>
