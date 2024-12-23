<template>
    <div class="ticket-list">
      <div class="ticket-header">
        <h2>Help Desk Tickets</h2>
      </div>
      <div class="ticket-table">
        <table v-if="tickets.length > 0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Department</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ticket in tickets" :key="ticket.id">
              <td>#{{ ticket.id }}</td>
              <td>{{ ticket.title }}</td>
              <td>
              <div class="assignee">
                <img 
                  :src="ticket.assignee.avatar" 
                  :alt="ticket.assignee.name"
                  class="avatar"
                >
                <span class="assignee-name">{{ ticket.assignee.name }}</span>
              </div>
            </td>
              <td>
                <span :class="['status-badge', ticket.status.toLowerCase().replace(' ', '-')]">
                  {{ ticket.status }}
                </span>
              </td>
              <td>
                <span :class="['priority-badge', ticket.priority.toLowerCase()]">
                  {{ ticket.priority }}
                </span>
              </td>
              <td>{{ ticket.department }}</td>
              <td>{{ formatDate(ticket.created) }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else class="loading-message">
          Loading tickets...
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TicketList',
    props: {
      tickets: {
        type: Array,
        required: true
      }
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .ticket-list {
    padding: 1.5rem;
  }
  
  .ticket-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .ticket-table {
    overflow-x: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    background: #f5f5f5;
    font-weight: 600;
    color: #333;
  }
  
  .status-badge, .priority-badge {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }
  
  .status-badge.open {
    background: #e3f2fd;
    color: #1976d2;
  }
  
  .status-badge.in-progress {
    background: #fff3e0;
    color: #f57c00;
  }
  
  .status-badge.resolved {
    background: #e8f5e9;
    color: #388e3c;
  }
  
  .priority-badge.high {
    background: #ffebee;
    color: #d32f2f;
  }
  
  .priority-badge.medium {
    background: #fff3e0;
    color: #f57c00;
  }
  
  .priority-badge.low {
    background: #e8f5e9;
    color: #388e3c;
  }
  
  .loading-message {
    text-align: center;
    padding: 2rem;
    color: #666;
  }
  </style>