import React, { useState } from "react";
import TodoContext from "./TodoContext";

function ContextProvider(props) {
    const [todos, setTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);
    const [todoFormState, setTodoFormState] = useState({
        title: "",
        priority: false,
        deadlineDate: new Date(),
        deadlineTime: new Date(),
        description: "",
        complete: "",
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

    const isComplete = (completeTodo) => {
        const completeTodoList = todos.filter(
            (todo) => todo.id === completeTodo.id
        );
        setCompleteTodos([...completeTodoList]);
    };

    return (
        <TodoContext.Provider
            value={{
                todoList: todos,
                todoFormState,
                setTodoFormState,
                addTodo,
                deleteTodo,
                editTodo,
                completeTodos,
                isComplete,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export default ContextProvider;
