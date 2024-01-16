import React from "react";
import "./AddNoteModal.css";
import NoteForm from "../EditModal/NoteForm";

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
                    <NoteForm
                        save={handleSave}
                        setIsModalOpen={setIsModalOpen}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddNoteModal;
