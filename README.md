#Job Marketplace

A simple React + TypeScript application that allows users to browse available service requests, filter them by city, and accept requests that interest them.


##Technologies
- React
- TypeScript
- Vite
- CSS


##Requirements 

Before running the application, make sure you have installed:
- Node.js 
- npm (included with Node.js)


##Getting Started
**1. Clone the repository**
```bash
git clone https://github.com/NightShadows7/job-marketplace.git
```

**2. Navigate to the project directory**
```bash
cd job-marketplace
```

**3. Install the dependencies**
```bash
npm install
```

**4. Start the server**
```bash
npm run dev
```

The application will be available at the local URL displayed in the terminal


##Features
- Display available job requests
- Filter requests by city
- Accept requests and remove them from the available list
- Display loading state when the application starts
- Display an empty state when no requests are available
- Format dates, durations and prices according to portuguese conventions 
- Highlight urgent requests
- Display a success message after accepting a request


##Future Improvements

With more time i would add unit tests, improve the filtering system to include filter by service type and urgency, add persistence so that accepted requests remain removed after refreshing the page, improve accessibility and add more detailed feedback for user interactions.