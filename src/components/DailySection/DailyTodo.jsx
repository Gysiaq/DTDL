import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import "./DailyTodo.css";

function DailyTodo() {
    const { todoList } = useContext(TodoContext);
    todoList?.map((todo, id) => {
        return (
            <div className="daily-todo-container" key={id}>
                <input className="daily-todo-checkbox" type="checkbox"></input>
                <span className="daily-todo-title heading-6">
                    {todo?.title}
                </span>
                <span className="daily-todo-description paragraph">
                    {todo?.description}
                </span>
            </div>
        );
    });
}

export default DailyTodo;
