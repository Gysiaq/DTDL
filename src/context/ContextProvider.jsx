import React, { useState } from "react";
import TodoContext from "./TodoContext";
import { db } from "../components/LoginPage/firebase";
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";

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

    const addTodo = async (todo) => {
        setTodos((prevTodo) => [...prevTodo, todo]);
        try {
            const docRef = await addDoc(collection((db, "todo"), todo));
            const querySnapshot = await addDoc(doc(collection(db, "todo")));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
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
