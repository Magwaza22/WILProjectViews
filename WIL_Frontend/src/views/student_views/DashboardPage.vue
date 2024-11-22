<template>
  <div class="home-page">

    <div class="content">
      <SideBar />
      <div class="main-content">

            <div class="hero-section">
              <h1>FIND YOUR DREAM PLACEMENT!!</h1>
            </div>

           <div class="info-cards">
              <div class="card">
                <h2>Track Placements</h2>
                <p>Monitor the status and progress of your current placements in real time.</p>
                <button @click="trackNow">Track Now</button>
              </div>

              <div class="card">
                <h2>Update Details</h2>
                <p>Update your personal and academic details to keep your profile accurate and ensure seamless placement communication.</p>
                <button @click="updateDetails">Update Now</button>
              </div>
            </div>

      </div>
    </div>
  </div>

</template>

<script>

import SideBar from "@/components/SideBar.vue";


export default {
  name: "Home",
  components: {
    SideBar,
  },
  methods: {
    trackNow() {
      this.$router.push("/track");
    },
    updateDetails() {
      this.$router.push("/update");
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
}
.main-content {
  flex: 1;
  padding: 20px;
}
.hero-section {
  text-align: center;
  background-size: cover;
  background-position: center;
  color:#527793;
  padding: 80px 20px;
  font-size: 2em;
  font-weight: bold;
}
.info-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 20px;
}
.card {
  background-color: #648ba8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 300px;
}
.card h2 {
  margin-bottom: 10px;
}
.card p {
  margin-bottom: 20px;
}
.card button {
  background-color: White;
  color: #648ba8;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
