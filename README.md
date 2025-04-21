# Weatherwise2.0
Weather forecast application which shows weather condition , wind speed , humidity ,etc..

Weather Forecast Application Description This is a Weather Forecast Application built using HTML, CSS, and JavaScript. It allows users to check the weather forecast for their location or any city in real-time. The app fetches weather data from an external API and displays essential weather information such as temperature, humidity, wind speed, and weather conditions.

Features Search for weather: Users can search for weather data by entering the name of a city.

Displays current weather: Shows real-time data for temperature, humidity, wind speed, and weather conditions.

User-friendly interface: A simple and clean UI made with HTML, CSS, and JavaScript.

Responsive design: The app is fully responsive and works well on both mobile and desktop devices.

Technologies Used HTML: For the basic structure of the application.

CSS: For styling the app and making it visually appealing.

JavaScript: For handling API requests and dynamic content rendering.

Weather API: The app uses a public API to fetch weather data (e.g., OpenWeatherMap).

Installation Clone the repository:

bash Copy Edit git clone Navigate to the project folder:

bash Copy Edit cd weather-forecast-app Open the index.html file in any browser to run the app.

Usage Open the application in your browser.

Enter the name of the city in the search bar and click the "Search" button.

The app will fetch the weather data and display it on the screen.

The displayed information includes:

Current temperature

Weather condition (e.g., clear, cloudy, rain)

Wind speed

Humidity

Example Here's an example of the app in action:

User enters "London".

The app fetches weather data for London and displays the temperature (e.g., 15°C), weather condition (e.g., cloudy), wind speed (e.g., 10 km/h), and humidity (e.g., 80%).

API Usage This application uses the OpenWeatherMap API to get weather data. You need an API key to use the API. Here’s how to obtain and use it:

Go to OpenWeatherMap API.

Sign up and get your API key.

Replace the API key in the JavaScript code:

javascript Copy Edit const apiKey = "YOUR_API_KEY"; File Structure The project has the following file structure:

graphql Copy Edit weather-forecast-app/ │ ├── index.html # Main HTML file ├── style.css # CSS file for styling ├── app.js # JavaScript file for logic and API calls └── README.md # This README file Contribution Feel free to fork this project and submit pull requests if you would like to contribute to it. If you encounter any issues, please create an issue on the GitHub repository.

License This project is open-source and available under the MIT License.
