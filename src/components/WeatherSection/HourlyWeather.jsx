import React from "react";
import moment from "moment";

function HourlyWeather({ forecast, idx }) {
    const formatTimeToHourlySection = (time) => {
        return moment(time).format("h:mm A");
    };

    return (
        <div key={idx}>
            <div className="hourly-forecase-container">
                <div className="hourly-forecase-time-section">
                    {formatTimeToHourlySection(forecast?.timestamp)}
                    <hr className="hourly-forecase-time-section-hr"></hr>
                </div>
                <div className="hourly-forecase-params">
                    <div className="hourly-forecase-temp">
                        <span className="hourly-forecase-temp-icon">
                            {forecast?.iconCode.icon}
                        </span>
                        <span>{forecast?.temp} °C</span>
                    </div>

                    <div className="hourly-forecase-humidity">
                        <i className="bi bi-droplet-fill hourly-drop-icon-position"></i>
                        {forecast?.relativeHumidity} %
                    </div>

                    <div className="hourly-forecase-windspeed">
                        <i className="bi bi-wind hourly-wind-icon-position"></i>
                        {forecast?.windSpeed} km/h
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HourlyWeather;
