import React, { useContext, useRef, useState } from "react";
import "./AddTodoForm.css";
import TodoContext from "../../context/TodoContext";

function AddTodoForm({ setIsTodoModalOpen }) {
    const { addTodo, editTodo, todoFormState, setTodoFormState } =
        useContext(TodoContext);
    const titleRef = useRef(todoFormState.title);
    const deadlineDateRef = useRef(todoFormState.deadlineDate);
    const priorityRef = useRef(todoFormState.priority);
    const descriptionRef = useRef(todoFormState.description);
    const deadlineTimeRef = useRef(todoFormState.deadlineTime);
    const [active, setActive] = useState(todoFormState.priority);

    const handleClick = () => {
        setActive(!active);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        todoFormState.id
            ? editTodo({
                  id: todoFormState.id,
                  title: titleRef.current.value,
                  deadlineDate: deadlineDateRef.current.value,
                  deadlineTime: deadlineTimeRef.current.value,
                  priority: active,
                  description: descriptionRef.current.value,
                  complete: todoFormState.complete,
              })
            : addTodo({
                  id: crypto.randomUUID(),
                  title: titleRef.current.value,
                  deadlineDate: deadlineDateRef.current.value,
                  deadlineTime: deadlineTimeRef.current.value,
                  priority: active,
                  description: descriptionRef.current.value,
                  complete: todoFormState.complete,
              });
        setTodoFormState({
            title: "",
            priority: "",
            deadlineDate: new Date(),
            deadlineTime: new Date(),
            description: "",
            complete: "",
        });
        setIsTodoModalOpen(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-form-container">
                <div className="todo-form-title">
                    <h5 className="heading-5">Title</h5>
                    <input
                        defaultValue={todoFormState.title}
                        ref={titleRef}
                        className="todo-form-title-input paragraph"
                        name="title"
                    ></input>
                </div>
                <div className="todo-form-important-section">
                    <div className="todo-form-deadline">
                        <h5 className=" heading-5">Deadline</h5>
                        <input
                            defaultValue={todoFormState.deadlineDate}
                            ref={deadlineDateRef}
                            type="date"
                            className="todo-form-deadline-input paragraph"
                            name="deadlineDate"
                        ></input>
                        <input
                            defaultValue={todoFormState.deadlineTime}
                            ref={deadlineTimeRef}
                            className="todo-form-deadline-input paragraph"
                            type="time"
                            name="deadlineTime"
                        ></input>
                    </div>
                    <div className="todo-form-priority">
                        <h5 className=" heading-5">Priority</h5>
                        <button
                            className="priority-button"
                            type="button"
                            value={active}
                            ref={priorityRef}
                            onClick={handleClick}
                            style={{
                                backgroundColor: active ? "gold" : "white",
                            }}
                        >
                            <i className="bi bi-star"></i>
                        </button>
                    </div>
                </div>
                <div className="todo-form-description">
                    <h5 className="heading-5">Description</h5>
                    <textarea
                        ref={descriptionRef}
                        defaultValue={todoFormState.description}
                        className="todo-form-description-input paragraph"
                        name="description"
                    ></textarea>
                </div>
                <div className="todo-form-save-button-position">
                    <button
                        type="submit"
                        className="todo-form-save-button paragraph"
                    >
                        {todoFormState.id ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddTodoForm;
