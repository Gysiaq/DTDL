import React, { useState } from "react";
import "./CurrentWeather.css";
import moment from "moment";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CurrentWeather({ data, dataHourly, cityName }) {
    const currentDate = moment().format("MM/DD/YYYY");

    const formatTimeToHourlySection = (time) => {
        return moment(time).format("h:mm A");
    };

    return (
        <div className="current-weather-container">
            <h3 className="heading-3 h3-style-currentweather">{cityName}</h3>
            <h5 className="h5-style-currentwather-date">{currentDate}</h5>
            {dataHourly?.slice(0, 1).map((firstElememt, idx) => {
                return (
                    <div key={idx}>
                        <div className="weather-today-container">
                            <span className="current-weather-icon">
                                {firstElememt?.iconCode.icon}
                            </span>
                            <div className="weather-today-details">
                                <h3 className="heading-3">
                                    {firstElememt?.temp}°C
                                </h3>
                                <h4 className="heading-4 h4-style-weather-details">
                                    {firstElememt?.iconCode.desc}
                                </h4>
                            </div>
                        </div>

                        <div className="current-weather-params">
                            <div className="current-weather-params-first-section">
                                <div className="real-fell-temp">
                                    <i className="bi bi-thermometer-half"></i>{" "}
                                    <span className="paragraph weather-details-description-span">
                                        Real fell:{" "}
                                    </span>
                                    <span className="paragraph">
                                        {firstElememt?.apparentTemperature} °C
                                    </span>
                                </div>

                                <div>
                                    <i className="bi bi-wind"></i>{" "}
                                    <span className="paragraph weather-details-description-span">
                                        Wind Speed:{" "}
                                    </span>
                                    <span className="paragraph">
                                        {firstElememt?.windSpeed} km/h
                                    </span>
                                </div>
                            </div>
                            <div className="current-weather-params-second-section">
                                <div className="humidity">
                                    <i className="bi bi-droplet-fill"></i>{" "}
                                    <span className="paragraph weather-details-description-span">
                                        Humidity:{" "}
                                    </span>
                                    <span className="paragraph">
                                        {firstElememt?.relativeHumidity} %
                                    </span>
                                </div>
                                <div>
                                    <img
                                        src="src\images\barometer.png"
                                        className="pressure-icon"
                                    ></img>{" "}
                                    <span className="paragraph weather-details-description-span">
                                        Pressure:{" "}
                                    </span>
                                    <span className="paragraph">
                                        {firstElememt?.pressureMSL} hPa
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="current-weather-sunset-sunrise">
                <div>
                    <i className="bi bi-brightness-high-fill"></i>{" "}
                    <span className="paragraph weather-details-description-span">
                        Rise:{" "}
                    </span>
                    <span className="paragraph">{data?.sunrise}</span>
                </div>
                <div>
                    <i className="bi bi-brightness-alt-high-fill"></i>{" "}
                    <span className="paragraph weather-details-description-span">
                        Set:{" "}
                    </span>
                    <span className="paragraph">{data?.sunset}</span>
                </div>
            </div>
            <div className="hourly-forecast">
                <h5 className="heading-5">Hourly Forecase</h5>
                <hr className="hourly-hr"></hr>
                <div className="hourly-forecast-position">
                    <Carousel showThumbs={false}>
                        {dataHourly?.slice(0, 21).map((forecast, idx) => {
                            <div key={idx}>
                                {dataHourly
                                    ?.slice(0, 3)
                                    .map((forecast, idx) => {
                                        return (
                                            <div
                                                className="hourly-forecase-container"
                                                key={idx}
                                            >
                                                <div className="hourly-forecase-time-section">
                                                    {formatTimeToHourlySection(
                                                        forecast?.timestamp
                                                    )}
                                                    <hr className="hourly-forecase-time-section-hr"></hr>
                                                </div>
                                                <div className="hourly-forecase-params">
                                                    <div className="hourly-forecase-temp">
                                                        <span className="hourly-forecase-temp-icon">
                                                            {
                                                                forecast
                                                                    ?.iconCode
                                                                    .icon
                                                            }
                                                        </span>
                                                        <span>
                                                            {forecast?.temp} °C
                                                        </span>
                                                    </div>

                                                    <div className="hourly-forecase-humidity">
                                                        <i className="bi bi-droplet-fill hourly-drop-icon-position"></i>
                                                        {
                                                            forecast?.relativeHumidity
                                                        }{" "}
                                                        %
                                                    </div>

                                                    <div className="hourly-forecase-windspeed">
                                                        <i className="bi bi-wind hourly-wind-icon-position"></i>
                                                        {forecast?.windSpeed}{" "}
                                                        km/h
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>;
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;
