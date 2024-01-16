import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import "./DailyTodo.css";

function DailyTodo({ todo }) {
    const { setTodos } = useContext(TodoContext);

    const handleToggleComplete = (e) => {
        e.preventDefault();

        setTodos((todoList) =>
            todoList.map((todooo) => {
                if (todooo.id === todo.id) {
                    return {
                        ...todooo,
                        complete: !todooo.complete,
                    };
                } else {
                    return todooo;
                }
            })
        );
    };

    return (
        <div
            className={
                todo.complete
                    ? "daily-complete-todo-container"
                    : "daily-todo-container"
            }
        >
            <input
                className="daily-todo-checkbox"
                type="checkbox"
                checked={todo.complete}
                onChange={handleToggleComplete}
            ></input>
            <span className="daily-todo-title heading-6">{todo?.title}</span>
            <span className="daily-todo-description paragraph">
                {todo?.description}
            </span>
        </div>
    );
}

export default DailyTodo;
