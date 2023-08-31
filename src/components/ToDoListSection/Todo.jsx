import React, { useContext } from "react";
import "./Todo.css";
import TodoContext from "../../context/TodoContext";

function Todo({ handleEdit, handleDelete }) {
    const { todoObj } = useContext(TodoContext);

    return (
        <div className="todo-container ">
            <span className="todo-title heading-6">{todoObj.title}</span>
            <span className="todo-deadline paragraph">{todoObj.deadline}</span>
            <span className="todo-priority">Priority</span>
            <span className="todo-description parahraph">
                {todoObj.description}
            </span>
            <div className="todo-button-section">
                <button className="todo-edit-button" onClick={handleEdit}>
                    Edit
                </button>
                <button className="todo-delete-button" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Todo;
