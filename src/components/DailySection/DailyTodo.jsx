import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";

import "./DailyTodo.css";

function DailyTodo({ todo, id }) {
    const { isComplete } = useContext(TodoContext);

    const markAsComplete = (e) => {
        e.preventDefault();
        isComplete(todo);
    };

    const markAsIncomplete = (e) => {
        e.preventDefault();
    };

    return (
        <div className="daily-todo-container" key={id}>
            <input
                className="daily-todo-checkbox"
                type="checkbox"
                // checked={todo.complete}
                onChange={!todo.complete ? markAsComplete : markAsIncomplete}
            ></input>
            <span className="daily-todo-title heading-6">{todo?.title}</span>
            <span className="daily-todo-description paragraph">
                {todo?.description}
            </span>
        </div>
    );
}

export default DailyTodo;
