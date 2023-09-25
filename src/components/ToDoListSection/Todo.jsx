import React, { useContext, useState } from "react";
import "./Todo.css";
import TodoContext from "../../context/TodoContext";

function Todo({ setIsTodoModalOpen, todo }) {
    const { deleteTodo, setTodoModalMode } = useContext(TodoContext);

    return (
        <div className="todo-container">
            <span className="todo-title heading-6">{todo?.title}</span>

            <span className="todo-deadline paragraph">{todo?.deadline}</span>
            <span className="todo-description parahraph">
                {todo?.description}
            </span>
            <div className="todo-button-section">
                <button
                    className="todo-edit-button"
                    onClick={() => {
                        setTodoModalMode("EDIT");
                        setIsTodoModalOpen(true);
                    }}
                >
                    Edit
                </button>

                <button
                    className="todo-delete-button"
                    onClick={() => {
                        deleteTodo(todo.id);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Todo;
