<template>
  <div class="register-page">
    <div class="register-form">
      <h2>Register</h2>
      <form>
        <label>Username:</label>
        <input type="text" placeholder="Enter your username" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
};
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white; /* Optional background color for contrast */
}
.register-form {
  margin: 20px;
  padding: 20px;
  background-color: #648ba8;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
}
.register-form h2 {
  margin-bottom: 20px;
}
.register-form label {
  display: block;
  margin: 10px 0 5px;
}
.register-form input {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.register-form button {
  width: 100%;
  padding: 10px;
  background-color: white;
  color: #648ba8;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
.register-form button:hover {
  background-color: #1d2d35;
}
</style>
