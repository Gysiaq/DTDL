import React, { useState } from "react";
import TodoContext from "./TodoContext";

function ContextProvider(props) {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({
        title: "",
        deadline: new Date(),
        priority: false,
        description: "",
    });

    const addTodo = (todo) => {
        setTodos((prevTodo) => [...prevTodo, todo]);
        console.log(todo);
    };

    const deleteTodo = (id) => {
        const newTodoList = todos.filter((todo) => todo.id !== id);
        setTodos(newTodoList);
    };

    const editTodo = (newTodo) => {
        const newTodoList = todos.map((todo) =>
            todo.id === newTodo.id ? newTodo : todo
        );
        setTodos(newTodoList);
    };
    return (
        <TodoContext.Provider
            value={{
                todoList: todos,
                todoObj: [todo, setTodo],
                addTodo: addTodo,
                deleteTodo: deleteTodo,
                editTodo: editTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export default ContextProvider;
