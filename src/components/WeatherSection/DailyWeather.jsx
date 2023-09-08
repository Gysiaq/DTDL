import React from "react";
import "./DailyWeather.css";
import moment from "moment";

function DailyWeather({ data }) {
    const WEEK_DAYS = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const dayInWeek = new Date().getDay();
    //concat() => merge arrays
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );
    const datesArray = [];
    for (let i = 0; i < 7; i++) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const nextDate = new Date(tomorrow.setDate(tomorrow.getDate() + i));
        const formatedDate = moment(nextDate).format("MM/DD/YYYY");
        datesArray.push(formatedDate);
    }

    return (
        <div>
            <div className="daily-weather-container">
                {data?.map((forecast, idx) => {
                    return (
                        <div className="daily-weather paragraph" key={idx}>
                            <div className="daily-main-params">
                                <div className="daily-date">
                                    <span className="daily-day">
                                        {forecastDays[idx]}
                                    </span>
                                    <span className="daily-date-number">
                                        {datesArray[idx]}
                                    </span>
                                </div>
                                <div className="daily-details">
                                    <span className="daily-weather-icon">
                                        {forecast.iconCode.icon}
                                    </span>
                                    <span className="daily-temp">
                                        {forecast.maxTemp} °C
                                    </span>
                                </div>
                            </div>

                            <div className="daily-others-params">
                                <div className="daily-others-params-humidity">
                                    <i className="bi bi-umbrella droplet-color-style"></i>{" "}
                                    <span>{forecast.prec_pos_max} %</span>
                                </div>
                                <div>
                                    <i className="bi bi-wind wind-color-style"></i>
                                    <span className="daily-wind">
                                        {forecast.windSpeed} km/h
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DailyWeather;
