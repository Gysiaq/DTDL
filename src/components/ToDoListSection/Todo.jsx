import React, { useContext } from "react";
import "./Todo.css";
import TodoContext from "../../context/TodoContext";

function Todo() {
    const { todoList, editTodo, deleteTodo } = useContext(TodoContext);
    const handleEdit = (todo) => {
        editTodo(todo);
    };
    const handleDelete = (id) => {
        deleteTodo(id);
    };
    return todoList?.map((todo, id) => {
        return (
            <div key={id}>
                <div className="todo-container ">
                    <span className="todo-title heading-6">{todo?.title}</span>

                    <span className="todo-deadline paragraph">
                        {todo?.deadline}
                    </span>

                    {/* <span className="todo-priority"></span> */}
                    <span className="todo-description parahraph">
                        {todo?.description}
                    </span>
                    <div className="todo-button-section">
                        <button
                            className="todo-edit-button"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        <button
                            className="todo-delete-button"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    });
}

export default Todo;
