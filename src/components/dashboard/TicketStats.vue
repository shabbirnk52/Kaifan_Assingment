<template>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">{{ stats.total }}</div>
        <div class="stat-label">Total Tickets</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ stats.open }}</div>
        <div class="stat-label">Open Tickets</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ stats.inProgress }}</div>
        <div class="stat-label">In Progress</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{{ stats.resolved }}</div>
        <div class="stat-label">Resolved</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TicketStats',
    props: {
      stats: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .stat-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    color: #005b9f;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    color: #666;
    font-size: 0.875rem;
  }
  </style>