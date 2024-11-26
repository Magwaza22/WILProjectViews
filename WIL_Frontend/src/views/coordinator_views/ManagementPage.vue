<template>
  <div class="management-page">
    <!-- Header Section -->
    <header class="header">
      <div class="header-content">
        <h1>Indiphile - Management Page</h1>
        <div class="nav">
          <button>HOME</button>
          <button>ABOUT US</button>
          <button>CONTACT US</button>
          <div class="profile-icon">
            <img src="https://via.placeholder.com/30" alt="Profile" />
          </div>
        </div>
      </div>
    </header>

    <!-- Student List Section -->
    <main>
      <h2>Student Profiles</h2>
      <div class="student-list">
        <div
            class="student-profile"
            v-for="student in students"
            :key="student.id"
        >
          <div class="student-info">
            <i class="icon user-icon">👤</i>
            <span>{{ student.name }}</span>
            <span>{{ student.email }}</span>
          </div>
          <div class="student-actions">
            <button @click="viewDocuments(student)">View Documents</button>
            <button @click="forwardDocuments(student)">Forward to Employer</button>
          </div>
        </div>
      </div>

      <!-- Feedback Section -->
      <div class="feedback-section">
        <h3>Send Feedback</h3>
        <textarea
            v-model="feedback"
            placeholder="Provide feedback on placement application..."
        ></textarea>
        <button @click="sendFeedback">Send Feedback</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        {
          id: 1,
          name: "Indiphile Ngcukana",
          email: "221243526@mycput.ac.za",
          documents: ["Resume.pdf", "CoverLetter.pdf", "Transcript.pdf"],
        },
        {
          id: 2,
          name: "Kamvalethu Smayile",
          email: "223456217@mycput.ac.za",
          documents: ["Resume.pdf", "IDCopy.pdf"],
        },
        {
          id: 3,
          name: "Oyintando Smith",
          email: "212171819@mycput.ac.za",
          documents: ["Resume.pdf", "Transcript.pdf"],
        },
        {
          id: 4,
          name: "Cherol Petersin",
          email: "21234567@mycput.ac.za",
          documents: ["Resume.pdf", "CoverLetter.pdf"],
        },
        {
          id: 5,
          name: "Wisani Magwaza",
          email: "22123456@mycput.ac.za",
          documents: ["Resume.pdf", "Transcript.pdf"],
        },
        {
          id: 6,
          name: "Olivia Williams",
          email: "22246810@mycput.ac.za",
          documents: ["CoverLetter.pdf", "IDCopy.pdf"],
        },
      ],
      feedback: "",
    };
  },
  methods: {
    viewDocuments(student) {
      alert(
          `Documents for ${student.name}:\n${student.documents.join("\n")}`
      );
    },
    forwardDocuments(student) {
      alert(
          `Documents for ${student.name} have been forwarded to the selected employer.`
      );
    },
    sendFeedback() {
      if (this.feedback.trim()) {
        alert("Feedback sent successfully: " + this.feedback);
        this.feedback = "";
      } else {
        alert("Please provide feedback before sending.");
      }
    },
  },
};
</script>

<style scoped>
/* Header Styling */
.header {
  background-color: #4cafaf;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content h1 {
  font-size: 1.5rem;
  margin: 0;
}

.nav {
  display: flex;
  gap: 15px;
}

.nav button {
  background-color: white;
  color: #4cafaf;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.nav button:hover {
  background-color: #3a8b8b;
  color: white;
}

.profile-icon img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

/* Main Section */
main {
  padding: 20px;
  background-color: #f0f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.student-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.student-profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.student-info {
  display: flex;
  flex-direction: column;
}

.student-actions button {
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.student-actions button:hover {
  background-color: #0056b3;
}

.feedback-section textarea {
  width: 100%;
  height: 80px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.feedback-section button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.feedback-section button:hover {
  background-color: #218838;
}
</style>
