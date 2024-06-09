Weather Wise

Weather Wise is a simple, intuitive weather application that provides up-to-date weather information for any location. Enter a city name, and Weather Wise will display current weather conditions, temperature, humidity, pressure, wind speed, and the local date and time.


Features:

1. Real-time weather updates
2. Displays weather conditions, temperature, humidity, pressure, and wind speed
3. Shows current date and time for the searched location
4. User-friendly interface


Getting Started

Prerequisites
Ensure you have the following installed on your system:

Node.js
npm (Node Package Manager)

Installation
1. Clone the repository:
 git clone https://github.com/vandana104/weatherwise.git
2. Navigate to the project directory: cd weatherwise
3. Install the dependencies:npm install


Running the Application
To start the application, run:npm start


This will start the development server and open the application in your default web browser.

API Configuration
Weather Wise uses a weather API to fetch weather data. Ensure you have an API key from a weather service provider (e.g., OpenWeatherMap).

Create a .env file in the root directory of the project.

Add your API key to the .env file:REACT_APP_WEATHER_API_KEY=your_api_key_here


Using Axios for Fetching Data

Weather Wise utilizes Axios, a promise-based HTTP client for the browser and Node.js, to fetch weather data from the API.

1. Install Axios: npm install axios
2. Import Axios in your code: Import Axios in your code: import axios from 'axios';
3. Use Axios to make GET requests to fetch weather data: const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);



Project Structure
The project structure is as follows:

weather-wise/
├── public/
│   ├── index.html
├── src/
│   ├── api/
│   │   └── index.js
│   ├── components/
│   │   └── WeatherCard/
│   │       ├── WeatherCard.js
│   │       └── WeatherCard.css
│   ├── App.js
│   ├── index.js
│   ├── index.css
├── .env
├── package.json
├── README.md


Code Explanation
The main component, WeatherCard, fetches weather data based on the user's search input and displays it. The component updates the current date and time every minute to ensure the displayed time is accurate.

Key parts of the code include:

Fetching weather data from the API
Handling state for weather data and current date/time
Formatting and displaying the weather information
For a detailed code explanation, refer to the comments within the source code files.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgments
OpenWeatherMap for providing the weather API.
