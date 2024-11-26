<template>
  <div class="profile-page">
    <SideBar />
    <!-- Header Section -->
    <header class="header">
      <div class="header-content">
        <h1>Welcome, Wisani</h1>
        <p>{{ currentDate }}</p>

        </div>

    </header>

    <!-- Main Profile Section -->
    <main class="main">
      <div class="profile-info">
        <div class="user-avatar">
          <img src="../assets/profile.jpeg" alt="profile" class="profile-image"  />
        </div>
        <div class="user-details">
          <div class="field">
            <i class="icon email-icon">📧</i>
            <label>Email:</label>
            <input v-if="isEditing" v-model="profile.email" type="email" />
            <p v-else>{{ profile.email }}</p>
          </div>
          <div class="field">
            <i class="icon phone-icon">📞</i>
            <label>Phone:</label>
            <input v-if="isEditing" v-model="profile.phone" type="tel" />
            <p v-else>{{ profile.phone }}</p>
          </div>
          <div class="field">
            <i class="icon address-icon">📍</i>
            <label>Address:</label>
            <textarea v-if="isEditing" v-model="profile.address"></textarea>
            <p v-else>{{ profile.address }}</p>
          </div>
        </div>
      </div>

      <!-- Documents Section -->
      <div class="documents-section">
        <h2>Documents</h2>
        <div class="documents">
          <div class="document" v-for="(doc, index) in profile.documents" :key="index">
            <p>{{ doc.name }}</p>
            <p>{{ doc.date }}</p>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="actions">
        <button v-if="!isEditing" @click="startEditing">Edit</button>
        <button v-if="isEditing" @click="saveChanges">Update</button>
        <button v-if="isEditing" @click="cancelChanges">Cancel</button>
      </div>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  data() {
    return {
      isEditing: false,
      profile: {
        email: "magwazawisani@gmail.com",
        phone: "+27 74 827 4968",
        address: "10 Dorset Street, Foreshore, Cape Town, Western Cape 8001",
        documents: [
          { name: "Resume", date: "05/04/2024" },
          { name: "Cover Letter", date: "05/04/2024" },
          { name: "ID Copy", date: "05/04/2024" },
          { name: "Transcript", date: "05/04/2024" },
        ],
      },
      backupProfile: null,
      currentDate: new Date().toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };
  },
  methods: {
    startEditing() {
      this.isEditing = true;
      this.backupProfile = { ...this.profile };
    },
    saveChanges() {
      this.isEditing = false;
      console.log("Profile updated:", this.profile);
    },
    cancelChanges() {
      this.isEditing = false;
      this.profile = { ...this.backupProfile };
    },
  },
};
</script>

<style scoped>
/* Header Styling */
.header {
  background-color: #648ba8;
  color: white;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content h1 {
  font-size: 1.5rem;
  margin: 0;
}

.header-content p {
  font-size: 0.9rem;
  margin: 0;
}

.profile-nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

.home-button {
  background-color: white;
  color: #648ba8;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.home-button:hover {
  background-color: #648ba8;
  color: white;
}

.profile-icon img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

/* Main Section Styling */
.profile-page {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f0f8f8;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.main {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}

.profile-info {
  display: flex;
  margin-bottom: 20px;
}

.user-avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.user-details .field {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-details label {
  font-weight: bold;
  margin-left: 10px;
}

.user-details input,
.user-details textarea {
  margin-left: 10px;
  margin-top: 5px;
  padding: 5px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.icon {
  font-size: 20px;
  margin-right: 10px;
  color: #648ba8;
}

.documents-section {
  margin-top: 20px;
}

.documents {
  display: flex;
  gap: 10px;
}

.document {
  background-color: #eef;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.actions button {
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.actions button:nth-child(1) {
  background-color: #648ba8;
  color: white;
}

.actions button:nth-child(2) {
  background-color: #648ba8;
  color: white;
}

.actions button:nth-child(3) {
  background-color: #648ba8;
  color: white;
}
</style>
