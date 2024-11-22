<template>
  <div class="profile-page">
    <Sidebar />
    <div class="main-content">
      <header class="profile-header">
        <div>
          <h1>Welcome, Indiphile</h1>
          <p>Wed, 30 October 2024</p>
        </div>
        <button class="profile-button">Profile</button>
      </header>

      <section class="info-section">
        <div class="user-details">
          <img src="../assets/profile.jpeg" alt="User avatar" class="avatar" />
          <div class="details">
            <h2>Wisani Magwaza</h2>
            <p>
              <img src="../assets/email.png" alt="Email Icon" />
              magwazawisani@gmail.com
            </p>
            <p>
              <img src="../assets/tele.png" alt="Phone Icon" />
              +27 74 827 4968
            </p>
            <p>
              <img src="../assets/location.png" alt="Location Icon" />
              10 Dorset Street, Foreshore, Cape Town, Western Cape 8001
            </p>
          </div>
        </div>

        <div class="document-section">
          <div class="document">
            <strong>Resume</strong>
            <p>Wisani Magwaza Resume2.pdf (05/04/2024)</p>
          </div>
          <div class="document">
            <strong>ID Copy</strong>
            <p>Wisani ID copy.pdf</p>
          </div>
          <div class="document">
            <strong>Cover Letter</strong>
            <p>Cover Letter.pdf (05/04/2024)</p>
          </div>
          <div class="document">
            <strong>Transcript</strong>
            <p>Wisani ID copy.pdf</p>
          </div>
        </div>

        <div class="actions">
          <button class="edit-button">Edit</button>
          <button class="update-button">Update</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/SideBar.vue";

export default {
  name: "ProfilePage",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
/* General Layout */
.profile-page {
  display: flex;
  background-color: #e9f7f7;
  font-family: Arial, sans-serif;
  color: #333;
  height: 100vh;
  overflow: auto;
}

.main-content {
  flex: 1;
  padding: 20px;
  margin-left: 250px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

/* Header */
.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.profile-header h1 {
  font-size: 24px;
  margin: 0;
}

.profile-header p {
  color: #777;
}

.profile-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

/* User Information Section */
.info-section {
  display: flex;
  flex-direction: column;
}

.user-details {
  display: flex;
  align-items: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.details p {
  margin: 5px 0;
}

/* Documents Section */
.document-section {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.document {
  flex: 1;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
}

/* Actions Section */
.actions {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.edit-button,
.update-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-button {
  background-color: #648ba8;
  color: #fff;
}

.update-button {
  background-color: #648ba8;
  color: #fff;
}
</style>
