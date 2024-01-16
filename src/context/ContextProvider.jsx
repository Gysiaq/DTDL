import React, { useState } from "react";
import TodoContext from "./TodoContext";
import moment from "moment";

function ContextProvider(props) {
    const [todos, setTodos] = useState([]);
    const [todoFormState, setTodoFormState] = useState({
        id: "",
        title: "",
        priority: false,
        deadlineDate: new Date(),
        deadlineTime: new Date(),
        description: "",
        complete: false,
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
        console.log(newTodo);
    };

    return (
        <TodoContext.Provider
            value={{
                todoList: todos,
                setTodos,
                todoFormState,
                setTodoFormState,
                addTodo,
                deleteTodo,
                editTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export default ContextProvider;
