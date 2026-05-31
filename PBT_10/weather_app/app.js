const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");
const historyBox = document.getElementById("history");

let searchHistory =
    JSON.parse(localStorage.getItem("weatherHistory")) || [];

renderHistory();

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (!city) return;

    getWeather(city);
});

async function getWeather(city) {

    // ===== Loading State =====
    result.innerHTML = `
        <div class="loading">
            ⏳ Đang tải...
        </div>
    `;

    try {

        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        const current = data.current_condition[0];

        const temp = current.temp_C;
        const humidity = current.humidity;
        const description =
            current.weatherDesc[0].value;

        const icon =
            current.weatherIconUrl[0].value;

        // ===== Success State =====
        result.innerHTML = `
            <div class="weather-card">
                <h2>${city}</h2>

                <img src="${icon}" alt="weather">

                <p>🌡 Nhiệt độ: ${temp}°C</p>

                <p>💧 Độ ẩm: ${humidity}%</p>

                <p>☁ ${description}</p>
            </div>
        `;

        saveHistory(city);

    } catch (error) {

        // ===== Error State =====
        result.innerHTML = `
            <div class="error">
                ❌ Không lấy được dữ liệu.
            </div>
        `;

        console.error(error);
    }
}

function saveHistory(city) {

    searchHistory = searchHistory.filter(
        item => item.toLowerCase() !== city.toLowerCase()
    );

    searchHistory.unshift(city);

    searchHistory = searchHistory.slice(0, 5);

    localStorage.setItem(
        "weatherHistory",
        JSON.stringify(searchHistory)
    );

    renderHistory();
}

function renderHistory() {

    historyBox.innerHTML = `
        <h3>Lịch sử tìm kiếm</h3>
    `;

    searchHistory.forEach(city => {

        const btn = document.createElement("button");

        btn.textContent = city;
        btn.className = "history-btn";

        btn.addEventListener("click", () => {
            cityInput.value = city;
            getWeather(city);
        });

        historyBox.appendChild(btn);
    });
}