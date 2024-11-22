<template>
  <div class="login-page">
    <div class="login-box">
      <h2>Login</h2>
      <form class="login-form">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <p>
          Forgot password? <router-link to="/reset" class="link">Reset!</router-link>
        </p>
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <router-link to="/register" class="link">Register Here!</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
  font-family: Arial, sans-serif;
}
.login-box {
  background-color: #648ba8;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: white;
  color: #648ba8;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.link {
  color: #2f4454;
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
</style>
