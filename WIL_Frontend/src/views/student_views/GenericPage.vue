<template>
  <div class="form-page">

    <div class="form-container">
      <h1>Applicant Details</h1>

      <form class="applicant-form">
        <!-- Personal Details Section -->
        <section>
          <h2>Personal Details</h2>
          <div class="form-group">
            <label>Full Name:</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div class="form-group">
            <label>Phone Number:</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>
        </section>

        <!-- Educational Background Section -->
        <section>
          <h2>Educational Background</h2>
          <div class="form-group">
            <label>Institution:</label>
            <input type="text" placeholder="Enter institution name" />
          </div>
          <div class="form-group">
            <label>Degree:</label>
            <input type="text" placeholder="Enter degree obtained" />
          </div>
          <div class="form-group">
            <label>Year of Graduation:</label>
            <input type="number" placeholder="Enter year of graduation" />
          </div>
        </section>

        <!-- Skills Section -->
        <section>
          <h2>Skills</h2>
          <div class="form-group">
            <label>List your skills:</label>
            <textarea placeholder="List your skills here"></textarea>
          </div>
        </section>

        <!-- Documents Section -->
        <section>
          <h2>Documents</h2>
          <p>Be sure to include an updated resume, ID, and academic record (DOC/DOCX/PDF - 2MB).</p>
          <div class="document-buttons">
            <button type="button">Resume</button>
            <button type="button">ID</button>
            <button type="button">Academic Record</button>
          </div>
        </section>

        <!-- Submit Section -->
        <button class="submit-button" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "GenericFormPage",
};
</script>

<style scoped>
.form-page {
  display: flex;
  flex-direction: column; /* Stack SidePane and form-container vertically */
  height: 100vh;
  overflow: hidden; /* Prevent overflowing of the page */
}

/* Adjust the form container to allow scrolling */
.form-container {
  flex: 1; /* Take up remaining height */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  margin: 20px;
  padding: 20px;
  background: #648ba8;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Headings */
h1 {
  font-size: 28px;
  color: #004f55;
  margin-bottom: 20px;
}

h2 {
  font-size: 18px;
  color: #333;
  margin-top: 20px;
  margin-bottom: 10px;
}

/* Form Styles */
.applicant-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  background-color: #f9f9f9;
}

textarea {
  resize: none;
  height: 80px;
}

.document-buttons button {
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
