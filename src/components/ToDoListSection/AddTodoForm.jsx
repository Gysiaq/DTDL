import React, { useContext, useState } from "react";
import "./AddTodoForm.css";
import { IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import TodoContext from "../../context/TodoContext";

function AddTodoForm({ setIsTodoModalOpen }) {
    const { todoObj, addTodo } = useContext(TodoContext);
    const [todo, setTodo] = todoObj;

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setIsTodoModalOpen(false);
    };
    return (
        <form>
            <div className="todo-form-container">
                <div className="todo-form-title">
                    <h5 className="heading-5">Title</h5>
                    <input
                        className="todo-form-title-input paragraph"
                        value={todo.title}
                        name="title"
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="todo-form-important-section">
                    <div className="todo-form-deadline">
                        <h5 className=" heading-5">Deadline</h5>
                        <input
                            type="date"
                            className="todo-form-deadline-input paragraph"
                            value={todo.deadline}
                            name="deadline"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="todo-form-priority">
                        <h5 className=" heading-5">Priority</h5>
                        <IconButton
                            value={todo.priority}
                            onClick={() =>
                                setTodo.priority(
                                    todo.priority
                                        ? (color = "#FFD700")
                                        : (color = "default")
                                )
                            }
                        >
                            <StarOutlineIcon fontSize="medium"></StarOutlineIcon>
                        </IconButton>
                    </div>
                </div>
                <div className="todo-form-description">
                    <h5 className="heading-5">Description</h5>
                    <textarea
                        className="todo-form-description-input paragraph"
                        value={todo.description}
                        name="description"
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="todo-form-save-button-position">
                    <button
                        className="todo-form-save-button paragraph"
                        onClick={handleSubmit}
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddTodoForm;
