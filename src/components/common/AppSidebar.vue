<template>
    <aside class="sidebar" :class="{ 'collapsed': !isOpen }">
      <div class="logo-container">
        <img src="@/assets/logo.jpg" alt="Help Desk Logo" class="logo">
      </div>
      <nav class="nav-menu">
        <div class="nav-item">
          <span class="icon">📊</span>
          Dashboard
        </div>
        <div class="nav-item">
          <span class="icon">🎫</span>
          Tickets
        </div>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'AppSidebar',
    props: {
      isOpen: {
        type: Boolean,
        default: true
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background: white;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .sidebar.collapsed {
    transform: translateX(-250px);
  }
  
  .logo-container {
    padding: 1.5rem;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
  
  .logo {
    width: 150px;
    height: auto;
  }
  
  .nav-menu {
    padding: 1rem 0;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    color: #333;
    gap: 0.75rem;
    cursor: pointer;
  }
  
  .nav-item:hover {
    background-color: #f5f5f5;
  }
  
  .icon {
    font-size: 1.25rem;
  }
  </style>