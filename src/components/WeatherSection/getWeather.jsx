import React from "react";
import axios from "axios";

function getWeather(lat, lon, timezone) {
    return axios
        .get(
            "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,surface_pressure,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,windspeed_10m_max&current_weather=true&timeformat=unixtime",
            {
                params: {
                    latitude: lat,
                    longitude: lon,
                    timezone,
                },
            }
        )
        .then(({ data }) => {
            return {
                current: parseCurrentWeather(data),
                daily: parseDailyWeather(data),
                hourly: parseHourlyWeather(data),
            };
        });
}
//zastanowić się na sunset i sun rise
function parseCurrentWeather({ current_weather, daily }) {
    const {
        temperature: currentTemp,
        windspeed: windSpeed,
        weathercode: iconCode,
    } = current_weather;

    const {
        temperature_2m_max: [maxTemp],
        temperature_2m_min: [minTemp],
        precipitation_sum: [precip],
        apparent_temperature_max: [maxTempFeelsLike],
        apparent_temperature_min: [minTempFeelsLike],
        sunrise: [sunrise],
        sunset: [sunset],
    } = daily;
    return {
        currentTemp: Math.round(currentTemp),
        highTemp: Math.round(maxTemp),
        lowTemp: Math.round(minTemp),
        highFeelsLike: Math.round(maxTempFeelsLike),
        lowFeelsLike: Math.round(minTempFeelsLike),
        windSpeed: Math.round(windSpeed),
        precip: Math.round(precip * 100) / 100,
        sunrise: Math.round(sunrise),
        sunset: Math.round(sunset * 100) / 100,
        iconCode,
    };
}

function parseDailyWeather({ daily }) {
    return daily.time.map((time, index) => {
        return {
            timestamp: time * 1000,
            iconCode: daily.weathercode[index],
            maxTemp: Math.round(daily.temperature_2m_max[index]),
        };
    });
}

function parseHourlyWeather({ hourly, current_weather }) {
    return hourly.time
        .map((time, index) => {
            return {
                timestamp: time * 1000,
                iconCode: hourly.weathercode[index],
                temp: Math.round(hourly.temperature_2m[index]),
                precip: Math.round(hourly.precipitation[index] * 100) / 100,
                surface_pressure: Math.round(hourly.surface_pressure[index]),
                relativehumidity_2m: Math.round(
                    hourly.relativehumidity_2m[index]
                ),
            };
        })
        .filter(({ timestamp }) => timestamp >= current_weather.time * 1000);
}
export default getWeather;
