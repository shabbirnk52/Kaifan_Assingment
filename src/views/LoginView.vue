<template>
  <div class="login-container">
    <div class="login-box">
      <div class="logo-container">
        <img src="@/assets/logo.jpg" alt="Help Desk Logo" class="logo" />
      </div>
      <h1>Help Desk Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Username</label>
          <input type="text" v-model="username" placeholder="Enter username" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model="password"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" :disabled="loading">
          {{ loading ? "Logging in..." : "Login" }}
        </button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "LoginView",
  setup() {
    const router = useRouter();

    const username = ref("");
    const password = ref("");
    const loading = ref(false);
    const error = ref("");

    const handleLogin = async () => {
      loading.value = true;
      error.value = "";

      try {
        // For demo, we'll use simple validation
        if (username.value === "demo" && password.value === "demo") {
          localStorage.setItem("user-token", "demo-token");
          await router.push("/dashboard");
        } else {
          error.value = "Invalid credentials";
        }
      } catch (err) {
        error.value = "Login failed. Please try again.";
      } finally {
        loading.value = false;
      }
    };

    return {
      username,
      password,
      loading,
      error,
      handleLogin,
    };
  },
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.login-box {
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.logo-container {
  text-align: center;
  margin-bottom: 1.5rem;
}

.logo {
  width: 200px;
  height: auto;
  margin-bottom: 1rem;
}

h1 {
  color: #005b9f; /* Matching the logo's blue */
  text-align: center;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

input:focus {
  outline: none;
  border-color: #005b9f; /* Matching the logo's blue */
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #005b9f; /* Matching the logo's blue */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #004c8c; /* Slightly darker blue */
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error {
  color: #f44336;
  margin-top: 1rem;
  text-align: center;
}
</style>
