# Upfirst Challenge

This project is a React-based web app built with **TypeScript** and styled with **TailwindCSS**. The app fetches data from the Hacker News API and displays it as expandable cards with pagination support. The app is containerized with Docker for easy deployment.

## Features

- **Sidebar** with a menu.
- **Expandable cards** that display additional information when clicked.
- **Card Deletion** functionality with buttons.
- **Paginated API** data from Hacker News.
- **Responsive design** using TailwindCSS.
- **Dockerized** for container-based deployment.

## Technologies Used

- **React** with **TypeScript**
- **TailwindCSS** for styling
- **Docker** for containerization
- **Hacker News API** as the data source

## Requirements

- Node.js (v14+)
- Docker

## Installation

To install and run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/upfirst-challenge.git
   cd upfirst-challenge
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm start
   ```

4. **Visit the app** at `http://localhost:3000` in your browser.

## Docker Setup

To build and run the app with Docker:

1. **Build the Docker image**:

   ```bash
   docker-compose build
   ```

2. **Run the container**:

   ```bash
   docker-compose up
   ```

3. Visit the app at `http://localhost:3000`.


## API Integration

The app fetches data from the Hacker News API. Each card displays the title and author of a story from the API. The app uses a pagination system, with a "Load More" button in the footer to fetch additional stories.