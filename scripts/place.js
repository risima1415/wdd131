const temperature = 8;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("windChill").textContent =
        calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
} else {
    document.getElementById("windChill").textContent = "N/A";
}

// Footer

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    document.lastModified;