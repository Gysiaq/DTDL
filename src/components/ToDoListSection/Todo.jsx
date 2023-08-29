import React from "react";
import "./Todo.css";

function Todo() {
    const { todoObj, deleteTodo, editTodo } = useContext(TodoContext);
    const [todo, setTodo] = todoObj;
    return (
        <div className="todo-container ">
            <span className="todo-title heading-6">{todo.title}</span>
            <span className="todo-deadline paragraph">{todo.deadline}</span>
            <span className="todo-priority">Priority</span>
            <span className="todo-description parahraph">
                {todo.description}
            </span>
            <div className="todo-button-section">
                <button className="todo-edit-button" onClick={editTodo}>
                    Edit
                </button>
                <button className="todo-delete-button" onClick={deleteTodo}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Todo;
