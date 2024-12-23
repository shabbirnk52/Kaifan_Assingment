Help Desk Management System Demo
Show Image
A modern help desk management system built with Vue.js 3.

Authentication System - Secure login functionality
Dashboard Overview - Real-time statistics and ticket monitoring
Ticket Management - View and track support tickets
Integration with SWAPI - Demonstrates API integration capabilities
Responsive Design - Mobile-first approach with modern UI/UX
Arabic Language Support - RTL layout with optimized Arabic fonts

🚀 Tech Stack

Vue.js 3 (Composition API)
Vue Router for navigation
Axios for API calls
Star Wars API (SWAPI) for demo data
CSS3 with modern features
Cairo Font for Arabic support

📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14.0.0 or higher)
npm (v6.0.0 or higher)

⚙️ Installation

Clone the repository

bashCopygit clone <repository-url>
cd helpdesk-demo

Install dependencies

bashCopynpm install

Start the development server

bashCopynpm run serve

Build for production

bashCopynpm run build
🔑 Demo Credentials
To access the system, use these demo credentials:

Username: demo
Password: demo

📁 Project Structure
Copysrc/
├── assets/          # Static assets
├── components/      # Reusable Vue components
│   ├── common/      # Shared components
│   └── dashboard/   # Dashboard-specific components
├── router/          # Vue Router configuration
├── store/           # State management
├── views/           # Page components
└── services/        # API services
🎯 Key Components

Login View

Secure authentication
Form validation
Error handling


Dashboard

Ticket statistics
Real-time updates
Responsive layout


Ticket List

Sortable columns
Status tracking
Priority management



🔧 Configuration
The application uses the following environment variables:
envCopyVUE_APP_API_URL=https://swapi.dev/api
🌐 API Integration
The demo uses the Star Wars API (SWAPI) to simulate a real help desk system:

Starships data as tickets
Character data as support agents
Planets data as departments

📱 Responsive Design
The application is fully responsive and tested on:

Desktop browsers
Tablets
Mobile devices

🌟 Production Deployment
For production deployment:

Build the project

bashCopynpm run build

Deploy the dist folder to your hosting service

🤝 Contributing
This is a assingment project. However, feedback and suggestions are welcome!
📄 License
This project is open-source and available under the MIT License.

Created by Shabbir