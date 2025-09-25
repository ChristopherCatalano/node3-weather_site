# Weather App 🌤️

A beginner friendly weather application built with Node.js and Express, completed as part of my early programming coursework. This project serves as an introduction to full-stack web development fundamentals and demonstrates core concepts in JavaScript, server-side programming, and API integration.

## Project Overview

This weather application allows users to search for weather information by entering any location. The app combines geocoding services to convert addresses into coordinates, then fetches real-time weather data to provide current conditions including temperature, weather descriptions, and wind information.

As one of my first projects completed during coursework, this application represents my initial steps into backend development and API integration, showcasing the practical application of programming fundamentals in a real-world context.

## Features

- **Location Search**: Enter any address or location to get weather information
- **Real-time Weather Data**: Current temperature, weather conditions, and wind information
- **Responsive Design**: Clean, mobile-friendly interface
- **Error Handling**: Graceful handling of invalid locations and API errors
- **Multiple Pages**: Home, About, and Help pages with consistent navigation
- **404 Error Handling**: Custom error pages for better user experience

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Templating**: Handlebars (HBS)
- **APIs**: 
  - Mapbox Geocoding API (for location services)
  - Weatherstack API (for weather data)
- **HTTP Client**: Postman Request
- **Development**: Nodemon for development server

## Installation Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/node3-weather_site.git
   cd node3-weather_site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up API keys** (Optional - for full functionality)
   - Sign up for a free [Mapbox account](https://www.mapbox.com/) and get your geocoding API key
   - Sign up for a free [Weatherstack account](https://weatherstack.com/) and get your weather API key
   - Replace the API keys in `src/utils/geocode.js` and `src/utils/forecast.js`

4. **Start the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## How to Run

1. Start the server using `npm start`
2. Open your web browser and go to `http://localhost:3000`
3. Enter any location in the search box (e.g., "New York", "London", "Tokyo")
4. Click the "Search" button to get current weather information
5. Navigate between pages using the header links

## What I Learned

This project was instrumental in my development journey, teaching me:

- **Server-side Programming**: How to create and configure Express.js servers
- **API Integration**: Working with external APIs for geocoding and weather data
- **Asynchronous JavaScript**: Understanding callbacks and handling asynchronous operations
- **Error Handling**: Implementing proper error handling for API calls and user input
- **Template Engines**: Using Handlebars for dynamic HTML generation
- **RESTful Routes**: Creating different endpoints for various application features
- **Static File Serving**: Serving CSS, JavaScript, and image files
- **Environment Variables**: Understanding port configuration and deployment considerations
- **HTTP Methods**: Working with GET requests and query parameters
- **Frontend-Backend Communication**: How client-side JavaScript communicates with server endpoints

## Reflection

This project marked a significant milestone in my programming journey. As one of my first full-stack applications, it taught me that programming isn't just about writing code it's about solving problems and creating tools that people can use. The process of integrating multiple APIs, handling errors gracefully, and creating a user friendly interface gave me confidence in my ability to build complete applications.

The challenges I faced: debugging API calls, understanding asynchronous JavaScript, and creating responsive designs were invaluable learning experiences that prepared me for more complex projects. This weather app represents not just a technical achievement, but the beginning of my passion for creating meaningful software solutions.

---