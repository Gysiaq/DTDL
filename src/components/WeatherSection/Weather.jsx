import React from "react";
import "./Weather.css";
import getWeather from "./getWeather";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";

// getWeather(50.0614, 19.9366, Intl.DateTimeFormat().resolvedOptions().timeZone)
//     .then(renderWeather)
//     .catch((e) => {
//         console.error(e);
//         alert("Error getting weather");
//     });

// function renderWeather({ current, daily, hourly }) {
//     renderCurrentWeather(current),
//         renderDailyWeather(daily),
//         renderHourlyWeather(hourly);
// }

function Weather() {
    return (
        <div className="weather-container" id="weather">
            <h2 className="heading-2 h2-style">Weather</h2>
            <div className="weather-location">
                <div className="weather-location-input-search">
                    <input
                        className="weather-location-input paragraph"
                        placeholder="Location..."
                    ></input>
                    <button className="weather-location-input-search-button">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
                <button className="weather-location-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="black"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                    >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                </button>
            </div>
            <div className="forcast">
                <div className="forcast-currentweather">
                    <CurrentWeather />
                </div>
                <div className="forcast-dailyweather">
                    <DailyWeather />
                </div>
            </div>
        </div>
    );
}

export default Weather;
