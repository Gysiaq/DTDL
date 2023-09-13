import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { getWeatherDescriptors } from "./iconMap";

function getWeather(lat, lon, timezone) {
    return axios
        .get(
            "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,visibility,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max&current_weather=true&timeformat=unixtime",
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

const formatTime = (time) => {
    const date = moment.unix(time);
    return date.format("h:mm A");
};

function parseCurrentWeather({ current_weather, daily }) {
    const { weathercode: iconCode } = current_weather;

    const {
        sunrise: [sunrise],
        sunset: [sunset],
    } = daily;

    return {
        sunrise: formatTime(sunrise),
        sunset: formatTime(sunset),
        iconCode: getWeatherDescriptors(iconCode),
    };
}

function parseDailyWeather({ daily }) {
    return daily.time.map((time, index) => {
        return {
            timestamp: time * 1000,
            iconCode: getWeatherDescriptors(daily.weathercode[index]),
            maxTemp: Math.round(daily.temperature_2m_max[index]),
            minTemp: Math.round(daily.temperature_2m_min[index]),
            prec_sum: Math.round(daily.precipitation_sum[index]),
            windSpeed: Math.round(daily.windspeed_10m_max[index]),
            prec_pos_max: Math.round(
                daily.precipitation_probability_max[index]
            ),
        };
    });
}

function parseHourlyWeather({ hourly, current_weather }) {
    return hourly.time
        .map((time, index) => {
            return {
                timestamp: time * 1000,
                iconCode: getWeatherDescriptors(
                    hourly.weathercode[index],
                    hourly.is_day[index]
                ),
                temp: Math.round(hourly.temperature_2m[index]),
                precip: Math.round(hourly.precipitation[index] * 100) / 100,
                surfacePressure:
                    Math.round(hourly.surface_pressure[index] * 100) / 100,
                relativeHumidity: Math.round(hourly.relativehumidity_2m[index]),
                apparentTemperature: Math.round(
                    hourly.apparent_temperature[index]
                ),
                visibility: Math.round(hourly.visibility[index]),
                windSpeed: Math.round(hourly.windspeed_10m[index]),
                pressureMSL: Math.round(hourly.pressure_msl[index]),
                isDaytime: hourly.is_day[index],
            };
        })
        .filter(({ timestamp }) => timestamp >= current_weather.time * 1000);
}

export default getWeather;
