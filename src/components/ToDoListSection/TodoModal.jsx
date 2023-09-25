import React, { useContext } from "react";
import "./TodoModal.css";
import CloseIcon from "@mui/icons-material/Close";
import AddTodoForm from "./AddTodoForm";
import TodoContext from "../../context/TodoContext";

function TodoModal({ setIsTodoModalOpen }) {
    const { setTodoModalMode } = useContext(TodoContext);
    return (
        <div className="modal-todo-background modal-edit-position">
            <div className="modal-todo-container">
                <div className="modal-todo-close-button-position">
                    <button
                        className=" modal-todo-close-button-style"
                        onClick={() => {
                            setIsTodoModalOpen(false);
                            setTodoModalMode("ADD");
                        }}
                    >
                        <CloseIcon />
                    </button>
                </div>
                <div className="modal-todo-form-section"></div>
                <AddTodoForm setIsTodoModalOpen={setIsTodoModalOpen} />
            </div>
        </div>
    );
}

export default TodoModal;
