import React from "react";
import "./CurrentWeather.css";

function CurrentWeather() {
    return (
        <div className="current-weather-container">
            <h3 className="heading-3 h3-style-currentweather">Today</h3>
            <h5 className="h5-style-currentwather-date">06/07/2023</h5>

            <div className="weather-today-container">
                <i className="bi bi-cloud-fill"></i>
                <div className="weather-today-details">
                    <h3 className="heading-3">66 C</h3>
                    <h4 className="heading-4 h4-style-weather-details">
                        cloudy
                    </h4>
                </div>
            </div>

            <div className="current-weather-params">
                <div className="current-weather-params-first-section">
                    <div>
                        {/* <icon></icon> */}
                        <span className="paragraph weather-details-description-span">
                            Real fell:
                        </span>
                        <span className="paragraph"> 4 syopni C</span>
                    </div>

                    <div>
                        {/* <icon></icon> */}
                        <span className="paragraph weather-details-description-span">
                            Real fell:
                        </span>
                        <span className="paragraph">4 syopni C</span>
                    </div>
                </div>
                <div className="current-weather-params-second-section">
                    <div>
                        {/* <icon></icon> */}
                        <span className="paragraph weather-details-description-span">
                            Real fell:
                        </span>
                        <span className="paragraph">4 syopni C</span>
                    </div>
                    <div>
                        {/* <icon></icon> */}
                        <span className="paragraph weather-details-description-span">
                            Real fell:
                        </span>
                        <span className="paragraph">4 syopni C</span>
                    </div>
                </div>
            </div>

            <div className="current-weather-sunset-sunrise">
                <div>
                    {/* <icon></icon> */}
                    <span className="paragraph weather-details-description-span">
                        Real fell:
                    </span>
                    <span className="paragraph">4 syopni C</span>
                </div>
                <div>
                    <span className="paragraph weather-details-description-span">
                        Real fell:
                    </span>
                    <span className="paragraph">4 syopni C</span>
                </div>
            </div>

            <div className="hourly-forecast">
                <h5>Hourly Forecase</h5>

                <div>
                    <hr></hr>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;
