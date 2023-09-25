import React, { useReducer, useRef, useState } from "react";
import "./Weather.css";
import getWeather from "./getWeather";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import Search from "./Search";
import { API_KEYS } from "../../APIKey";

function Weather() {
    const [weather, setWeather] = useState({});
    const [searchCityName, setSearchCityName] = useState("");
    const [searchTimeZone, setSearchTimeZone] = useState("");
    const REVERSE_GEO_API_KEY = API_KEYS.REVERSE_GEO_API_KEY;

    async function cityName(lat, lon) {
        const response = await fetch(
            `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}&key=${REVERSE_GEO_API_KEY}`
        );
        const result = await response.json();
        setSearchCityName(result);
    }

    async function localTimeZone(lat, lon) {
        const response = await fetch(
            `https://api-bdc.net/data/timezone-by-location?latitude=${lat}&longitude=${lon}&key=${REVERSE_GEO_API_KEY}`
        );
        const result = await response.json();
        setSearchTimeZone(result);
        console.log(result);
    }

    //getWeather(35.6897, 139.692, Intl.DateTimeFormat().resolvedOptions().timeZone
    //City Weather - search in input
    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");
        localTimeZone(lat, lon);
        const timezone = searchTimeZone.ianaTimeId;
        getWeather(lat, lon, timezone).then(setWeather);
        // console.log(timezone);
        cityName(lat, lon);
    };

    //City Wether - user localization
    const getLocalization = () => {
        const locationSuccess = ({ coords }) => {
            getWeather(
                coords.latitude,
                coords.longitude,
                Intl.DateTimeFormat().resolvedOptions().timeZone
            )
                .then(setWeather)
                .then(cityName(coords.latitude, coords.longitude))
                .catch((e) => {
                    console.error(e);
                    alert("Error getting weather");
                });
        };

        const locationError = () => {
            alert(
                "There was an error getting your location. Please allow us to use your location and refresh the page"
            );
        };
        navigator.geolocation.getCurrentPosition(
            locationSuccess,
            locationError
        );
    };

    return (
        <div className="weather-container" id="weather">
            <div className="weather-main-section">
                <div>
                    <h2 className="heading-2 h2-style">Weather</h2>
                    <div className="weather-location">
                        <div>
                            <Search onSearchChange={handleOnSearchChange} />
                        </div>
                        <button
                            className="weather-location-button"
                            onClick={getLocalization}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                fill="rgba(0,0,0,0.25)"
                                className="bi bi-geo-alt"
                                viewBox="0 0 16 16"
                            >
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <img
                    className="weather-home-image"
                    src="src/images/YoungAndHappyRafiki.svg"
                ></img>
            </div>
            <div className="forcast">
                <div className="forcast-currentweather">
                    <CurrentWeather
                        data={weather?.current}
                        dataHourly={weather?.hourly}
                        searchCityName={searchCityName}
                    />
                </div>
                <div className="forcast-dailyweather">
                    <h3 className="heading-3 forcast-dailyweather-title">
                        Forecast
                    </h3>
                    <DailyWeather data={weather?.daily} />
                </div>
            </div>
        </div>
    );
}

export default Weather;
