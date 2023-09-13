import React from "react";
import "./DailyTask.css";
import Calendar from "./Calendar";
import DailyTodo from "./DailyTodo";

function DailyTask() {
    return (
        <div className="daily-container" id="dailytask">
            <h2 className="heading-2 h2-style-daily">Daily Task</h2>

            <div className="daiylist-callender-container">
                <div className="callender">
                    <Calendar />
                </div>

                <div className="dailylist">
                    <DailyTodo />
                    <hr className="dailylist-hr"></hr>
                </div>
            </div>
        </div>
    );
}

export default DailyTask;
