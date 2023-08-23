import React from "react";
import "./AddTodoForm.css";
import { IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function AddTodoForm() {
    return (
        <form>
            <div className="todo-form-container">
                <div className="todo-form-title">
                    <h5 className="heading-5">Title</h5>
                    <input className="todo-form-title-input paragraph"></input>
                </div>
                <div className="todo-form-important-section">
                    <div className="todo-form-deadline">
                        <h5 className=" heading-5">Deadline</h5>
                        <input
                            type="date"
                            className="todo-form-deadline-input paragraph"
                        ></input>
                    </div>
                    <div className="todo-form-priority">
                        <h5 className=" heading-5">Priority</h5>
                        <IconButton>
                            <StarOutlineIcon fontSize="medium"></StarOutlineIcon>
                        </IconButton>
                    </div>
                </div>
                <div className="todo-form-description">
                    <h5 className="heading-5">Description</h5>
                    <textarea className="todo-form-description-input paragraph"></textarea>
                </div>
                <div className="todo-form-save-button-position">
                    <button className="todo-form-save-button paragraph">
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddTodoForm;
