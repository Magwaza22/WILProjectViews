<template>
  <div class="profile-page">
    <header class="header">
      <div>
        <h1>Welcome, Indiphile</h1>
        <p>Wed, 30 October 2024</p>
      </div>
      <button class="profile-button">Profile</button>
    </header>

    <main class="main-content">
      <section class="info-section">
        <div class="user-details">
          <img src="https://via.placeholder.com/100" alt="User avatar" class="avatar" />
          <div class="details">
            <h2>Wisani Magwaza</h2>
            <p>
              <img src="https://via.placeholder.com/20" alt="Email Icon" />
              magwazawisani@gmail.com
            </p>
            <p>
              <img src="https://via.placeholder.com/20" alt="Phone Icon" />
              +27 74 827 4968
            </p>
            <p>
              <img src="https://via.placeholder.com/20" alt="Location Icon" />
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

      <footer class="footer">
        <div class="contact-us">
          <h3>Contact us</h3>
          <p>Call Centre: +27 21 959 6767</p>
          <p>Email: info@cput.ac.za</p>
          <p>More contact details</p>
          <p>Search for someone who works here</p>
        </div>
        <div class="social-media">
          <h3>Connect with us</h3>
          <div class="social-icons">
            <img src="https://via.placeholder.com/30" alt="Instagram" />
            <img src="https://via.placeholder.com/30" alt="Facebook" />
            <img src="https://via.placeholder.com/30" alt="Twitter" />
            <img src="https://via.placeholder.com/30" alt="YouTube" />
          </div>
          <button class="subscribe-button">Subscribe</button>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>

<style scoped>
/* General Layout */
.profile-page {
  font-family: Arial, sans-serif;
  background-color: #e9f7f7;
  color: #333;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  font-size: 24px;
  margin: 0;
}

.header p {
  color: #777;
}

.profile-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.main-content {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  background-color: #007bff;
  color: #fff;
}

.update-button {
  background-color: #28a745;
  color: #fff;
}

/* Footer */
.footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.contact-us h3,
.social-media h3 {
  margin: 0 0 10px;
}

.social-icons img {
  margin-right: 10px;
}

.subscribe-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
