import React, { useContext, useState } from "react";
import "./ToDoList.css";
import Todo from "./Todo";
import TodoModal from "./TodoModal";
import TodoContext from "../../context/TodoContext";

function ToDoList() {
    const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);
    const { todoList } = useContext(TodoContext);

    return (
        <div className="todolist-container" id="todolist">
            <svg
                className="waves-top-position"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#025464"
                    fillOpacity="1"
                    d="M0,160L21.8,170.7C43.6,181,87,203,131,213.3C174.5,224,218,224,262,197.3C305.5,171,349,117,393,90.7C436.4,64,480,64,524,96C567.3,128,611,192,655,202.7C698.2,213,742,171,785,138.7C829.1,107,873,85,916,112C960,139,1004,213,1047,213.3C1090.9,213,1135,139,1178,122.7C1221.8,107,1265,149,1309,144C1352.7,139,1396,85,1418,58.7L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
                ></path>
            </svg>

            <h2 className="heading-2 h2-style-todolist">To Do List</h2>

            <div className="todolist-button-position">
                <button
                    className="todolist-button todolist-button-style todolist-button-text"
                    onClick={() => setIsTodoModalOpen(true)}
                >
                    <i className="bi bi-plus-lg"></i> New task
                </button>
            </div>
            {isTodoModalOpen && (
                <TodoModal setIsTodoModalOpen={setIsTodoModalOpen} />
            )}
            <div className="todolist paragraph">
                {todoList.length === 0 && "You have nothing to do"}
                {todoList
                    ?.sort(
                        (a, b) =>
                            new Date(a.deadline).getTime() -
                            new Date(b.deadline).getTime()
                    )
                    .sort((a, b) => b.priority - a.priority)
                    .map((todo) => (
                        <Todo
                            setIsTodoModalOpen={setIsTodoModalOpen}
                            todo={todo}
                            key={todo.id}
                        />
                    ))}
            </div>
        </div>
    );
}

export default ToDoList;
