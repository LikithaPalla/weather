async function getWeather() {
    const city = document.getElementById('city').value.trim();
    const apiKey = '971bf04784718c866e7473414684a0d7'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            document.getElementById('weather').innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <h3>${data.main.temp}°C</h3>
                <p>${data.weather[0].description}</p>
                <p>🌫 Humidity: ${data.main.humidity}%</p>
                <p>💨 Wind Speed: ${data.wind.speed} km/h</p>
            `;
        } else {
            document.getElementById('weather').innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Error fetching data.</p>`;
    }
}