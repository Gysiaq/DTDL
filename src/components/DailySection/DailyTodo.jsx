import React from "react";
import "./DailyTodo.css";

function DailyTodo() {
    return (
        <div className="daily-todo-container">
            <input className="daily-todo-checkbox" type="checkbox"></input>
            <span className="daily-todo-title heading-6">Title</span>
            <span className="daily-todo-description paragraph">
                Description...
            </span>
        </div>
    );
}

export default DailyTodo;
