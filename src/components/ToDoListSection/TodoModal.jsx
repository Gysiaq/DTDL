import React from "react";
import "./TodoModal.css";
import CloseIcon from "@mui/icons-material/Close";
import AddTodoForm from "./AddTodoForm";

function TodoModal() {
    return (
        <div className="modal-todo-background modal-edit-position">
            <div className="modal-todo-container">
                <div className="modal-todo-close-button-position">
                    <button className=" modal-todo-close-button-style">
                        <CloseIcon />
                    </button>
                </div>
                <div className="modal-todo-form-section"></div>
                <AddTodoForm />
            </div>
        </div>
    );
}

export default TodoModal;
