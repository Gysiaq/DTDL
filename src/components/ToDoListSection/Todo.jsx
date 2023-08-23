import React from "react";
import "./Todo.css";

function Todo() {
    return (
        <div className="todo-container ">
            <span className="todo-title heading-6">Title</span>
            <span className="todo-deadline paragraph">Deadline</span>
            <span className="todo-priority">Priority</span>
            <span className="todo-description parahraph">Description</span>
            <div className="todo-button-section">
                <button className="todo-edit-button">Edit</button>
                <button className="todo-delete-button"> Delete</button>
            </div>
        </div>
    );
}

export default Todo;
