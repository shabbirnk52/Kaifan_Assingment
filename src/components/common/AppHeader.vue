<template>
    <header class="header">
      <div class="header-left">
        <button class="menu-button" @click="$emit('toggle-sidebar')">
          <span class="menu-icon"></span>
        </button>
        <h1>Help Desk Dashboard</h1>
      </div>
      <div class="header-right">
        <button class="user-menu" @click="logout">
          Logout
        </button>
      </div>
    </header>
  </template>
  
  <script>
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'AppHeader',
    setup() {
      const router = useRouter()
  
      const logout = () => {
        localStorage.removeItem('user-token')
        router.push('/login')
      }
  
      return {
        logout
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    background: white;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .menu-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }
  
  .menu-icon {
    display: block;
    width: 24px;
    height: 2px;
    background: #005b9f;
    position: relative;
  }
  
  .menu-icon::before,
  .menu-icon::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #005b9f;
    left: 0;
  }
  
  .menu-icon::before {
    top: -6px;
  }
  
  .menu-icon::after {
    bottom: -6px;
  }
  
  .user-menu {
    padding: 0.5rem 1rem;
    background: #005b9f;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  h1 {
    color: #005b9f;
    font-size: 1.25rem;
    margin: 0;
  }
  </style>