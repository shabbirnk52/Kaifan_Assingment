  <template>
      <div class="dashboard-container">
        <AppSidebar :is-open="!isSidebarCollapsed" />
        <div class="main-content" :class="{ 'expanded': isSidebarCollapsed }">
          <AppHeader @toggle-sidebar="toggleSidebar" />
          <div class="dashboard-content">
            <div class="stats-container">
              <TicketStats :stats="ticketStats" />
            </div>
            <div class="tickets-container">
              <TicketList :tickets="tickets" />
            </div>
          </div>
        </div>
      </div>
    </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import AppHeader from '@/components/common/AppHeader.vue'
  import AppSidebar from '@/components/common/AppSidebar.vue'
  import TicketList from '@/components/dashboard/TicketList.vue'
  import TicketStats from '@/components/dashboard/TicketStats.vue'
  import axios from 'axios'
  
  export default {
    name: 'DashboardView',
    components: {
      AppHeader,
      AppSidebar,
      TicketList,
      TicketStats
    },
    setup() {
      const tickets = ref([])
      const ticketStats = ref({
        total: 0,
        open: 0,
        inProgress: 0,
        resolved: 0
      })
      const isSidebarCollapsed = ref(false)

      const fetchTickets = async () => {
  try {
    const response = await axios.get('https://swapi.info/api/starships')
    console.log('Raw Response:', response)

    if (!response || !response.data) {
      console.error('Invalid response structure:', response)
      return
    }

    const results = response.data || []
    console.log('Results:', results)

    const personId = Math.floor(Math.random() * 20) + 1
    let assigneeName = 'Unknown Agent'

    try {
        const personResponse = await axios.get(`https://swapi.info/api/people/${personId}`)
        if (personResponse.data && personResponse.data.name) {
          assigneeName = personResponse.data.name
        }
      } catch (err) {
        console.warn(`Could not fetch person ${personId}`, err)
      }

    // Transform starships into tickets
    const transformedTickets = results.map(starship => ({
      id: starship.url.split('/')[5], 
      title: starship.name,
      status: ['Open', 'In Progress', 'Resolved'][Math.floor(Math.random() * 3)],
      priority: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
      department: starship.manufacturer || 'Unknown',
      created: new Date(starship.created).toLocaleDateString(),
      assignee: {
        name: `Agent ${Math.floor(Math.random() * 100)}`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}` // Using DiceBear for avatars
      }
    }))

    // Update tickets
    tickets.value = transformedTickets

    // Update stats
    ticketStats.value = {
      total: transformedTickets.length,
      open: transformedTickets.filter(t => t.status === 'Open').length,
      inProgress: transformedTickets.filter(t => t.status === 'In Progress').length,
      resolved: transformedTickets.filter(t => t.status === 'Resolved').length
    }

    console.log('Transformed Tickets:', transformedTickets)
  } catch (error) {
    console.error('API Error:', error.response || error)
    tickets.value = []
    ticketStats.value = {
      total: 0,
      open: 0,
      inProgress: 0,
      resolved: 0
    }
  }
}
  
      const toggleSidebar = () => {
        isSidebarCollapsed.value = !isSidebarCollapsed.value
      }
  
      onMounted(() => {
        fetchTickets()
      })
  
      return {
        tickets,
        ticketStats,
        isSidebarCollapsed,
        toggleSidebar
      }
    }
  }
  </script>
  
  <style scoped>
  .dashboard-container {
    display: flex;
    min-height: 100vh;
    background-color: #f5f5f5;
  }
  
  .main-content {
    flex: 1;
    margin-left: 250px;
    transition: margin-left 0.3s ease;
  }
  
  .main-content.expanded {
    margin-left: 0;
  }
  
  .dashboard-content {
    padding: 20px;
  }
  
  .stats-container {
    margin-bottom: 20px;
  }
  
  .tickets-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>