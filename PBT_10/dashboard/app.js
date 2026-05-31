const userWidget = document.getElementById("userWidget");
const weatherWidget = document.getElementById("weatherWidget");
const countryWidget = document.getElementById("countryWidget");
const loadTime = document.getElementById("loadTime");
const statusText = document.getElementById("status");
const refreshBtn = document.getElementById("refreshBtn");

function loadingHTML() {
    return `
        <div class="loading">
            <div class="spinner"></div>
            <p>Đang tải...</p>
        </div>
    `;
}

function errorHTML(msg) {
    return `<div class="error">❌ ${msg}</div>`;
}

function showLoading() {
    userWidget.innerHTML = loadingHTML();
    weatherWidget.innerHTML = loadingHTML();
    countryWidget.innerHTML = loadingHTML();
}

async function loadDashboard() {
    const start = Date.now();

    statusText.textContent = "Loading...";
    showLoading();

    const results = await Promise.allSettled([
        fetch("https://randomuser.me/api/").then(r => r.json()),

        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true"
        ).then(r => r.json()),

        fetch("https://restcountries.com/v3.1/name/vietnam")
            .then(r => r.json())
    ]);

    // USER
    if (results[0].status === "fulfilled") {
        const user = results[0].value.results[0];

        userWidget.innerHTML = `
            <div class="user-card">
                <img src="${user.picture.large}">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
            </div>
        `;
    } else {
        userWidget.innerHTML = errorHTML("Không tải được user");
    }

    // WEATHER
    if (results[1].status === "fulfilled") {
        const weather = results[1].value.current_weather;

        weatherWidget.innerHTML = `
            <div class="weather">
                <h2>${weather.temperature}°C</h2>
                <span>Wind: ${weather.windspeed} km/h</span>
            </div>
        `;
    } else {
        weatherWidget.innerHTML = errorHTML("Không tải được thời tiết");
    }

    // COUNTRY
    if (results[2].status === "fulfilled") {
        const country = results[2].value[0];

        countryWidget.innerHTML = `
            <div class="country">
                <img src="${country.flags.png}">
                <h3>${country.name.common}</h3>
                <p>Capital: ${country.capital}</p>
                <p>Population: ${country.population.toLocaleString()}</p>
            </div>
        `;
    } else {
        countryWidget.innerHTML = errorHTML("Không tải được quốc gia");
    }

    loadTime.textContent = `${Date.now() - start} ms`;
    statusText.textContent = "Loaded";
}

refreshBtn.addEventListener("click", loadDashboard);

loadDashboard();