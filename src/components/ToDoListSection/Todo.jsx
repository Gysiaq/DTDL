import React, { useContext, useState } from "react";
import "./Todo.css";
import TodoContext from "../../context/TodoContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";

function Todo({ setIsTodoModalOpen, todo }) {
    const { deleteTodo, setTodoFormState } = useContext(TodoContext);
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const daysLeft = (deadline) => {
        return Math.round(
            Math.abs(today.getTime() - new Date(deadline).getTime()) / oneDay
        );
    };

    // jeśli mam mieć czas to musi być data
    return (
        <div
            className={
                todo.priority
                    ? "todo-container-with-priority"
                    : "todo-container"
            }
        >
            <span className="todo-title heading-6">{todo?.title}</span>
            {todo.deadlineDate?.length || todo.deadlineTime?.length ? (
                <div
                    className={
                        todo.priority
                            ? "todo-deadline-with-priority paragraph"
                            : "todo-deadline paragraph"
                    }
                >
                    <span>{moment(todo?.deadlineDate).format("L")}</span>
                    <span>{todo?.deadlineTime}</span>
                    {/* <span>
                    {todo?.deadline === NaN ? (
                        " "
                    ) : (
                        <span>
                            {"Days Left: "}
                            {daysLeft(todo?.deadline)}
                        </span>
                    )}
                </span> */}
                </div>
            ) : undefined}
            <span className="todo-description parahraph">
                {todo?.description}
            </span>
            <div className="todo-button-section">
                <button
                    className={
                        todo.priority
                            ? "todo-edit-button-with-priority"
                            : "todo-edit-button"
                    }
                    onClick={() => {
                        setTodoFormState(todo);
                        setIsTodoModalOpen(true);
                    }}
                >
                    {" "}
                    <EditIcon fontSize="12px" />
                    Edit
                </button>

                <button
                    className={
                        todo.priority
                            ? "todo-delete-button-with-priority"
                            : "todo-delete-button"
                    }
                    onClick={() => {
                        deleteTodo(todo.id);
                    }}
                >
                    {" "}
                    <DeleteIcon fontSize="12px" />
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Todo;
