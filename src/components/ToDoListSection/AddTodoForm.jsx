import React, { useContext, useRef, useState } from "react";
import "./AddTodoForm.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

import TodoContext from "../../context/TodoContext";

function AddTodoForm({ setIsTodoModalOpen }) {
    const { addTodo, editTodo, todoModalMode, setTodoModalMode } =
        useContext(TodoContext);
    const titleRef = useRef(null);
    const deadlineRef = useRef(null);
    const priorityRef = useRef(null);
    const descriptionRef = useRef(null);
    const [active, setActive] = useState(false);
    const [todo, setTodo] = useState({
        id: "",
        title: "",
        deadline: new Date(),
        priority: false,
        description: "",
    });
    const handleClick = () => {
        setActive(!active);
    };

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        (todoModalMode === "EDIT" ? editTodo : addTodo)({
            id: crypto.randomUUID(),
            title: titleRef.current.value,
            deadline: deadlineRef.current.value,
            priority: priorityRef.current.value,
            description: descriptionRef.current.value,
        });
        setTodoModalMode("ADD");
        setIsTodoModalOpen(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-form-container">
                <div className="todo-form-title">
                    <h5 className="heading-5">Title</h5>
                    <input
                        ref={titleRef}
                        className="todo-form-title-input paragraph"
                        name="title"
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="todo-form-important-section">
                    <div className="todo-form-deadline">
                        <h5 className=" heading-5">Deadline</h5>
                        <input
                            ref={deadlineRef}
                            type="date"
                            className="todo-form-deadline-input paragraph"
                            name="deadline"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="todo-form-priority">
                        <h5 className=" heading-5">Priority</h5>
                        <button
                            ref={priorityRef}
                            onClick={handleClick}
                            className={
                                active
                                    ? "gold-priority-btn"
                                    : "white-priority-btn"
                            }
                        >
                            <StarOutlineIcon fontSize="medium"></StarOutlineIcon>
                        </button>
                    </div>
                </div>
                <div className="todo-form-description">
                    <h5 className="heading-5">Description</h5>
                    <textarea
                        ref={descriptionRef}
                        className="todo-form-description-input paragraph"
                        name="description"
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="todo-form-save-button-position">
                    <button
                        type="submit"
                        className="todo-form-save-button paragraph"
                    >
                        {todoModalMode === "EDIT" ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddTodoForm;
