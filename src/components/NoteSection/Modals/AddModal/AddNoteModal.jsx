import React from "react";
import AddNoteForm from "./AddNoteForm";
import "./AddNoteModal.css";

import CloseIcon from "@mui/icons-material/Close";

function AddNoteModal({ setIsModalOpen, handleSave }) {
    return (
        <div className="modal-background modal-position">
            <div className="modal-container">
                <div className="modal-close-button-position">
                    <button
                        className=" modal-close-button-style"
                        onClick={() => {
                            setIsModalOpen(false);
                        }}
                    >
                        <CloseIcon />
                    </button>
                </div>
                <div className="modal-form-section">
                    <AddNoteForm save={handleSave} />
                </div>
            </div>
        </div>
    );
}

export default AddNoteModal;
