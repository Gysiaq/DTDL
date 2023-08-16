import React from "react";
import EditNoteForm from "./EditNoteForm";
import "./EditNoteModal.css";
import CloseIcon from "@mui/icons-material/Close";

function EditNoteModal({ setIsEditModalOpen, note, editNote }) {
    return (
        <div className="modal-edit-background modal-edit-position">
            <div className="modal-edit-container">
                <div className="modal-edit-close-button-position">
                    <button
                        className=" modal-edit-close-button-style"
                        onClick={() => {
                            setIsEditModalOpen(false);
                        }}
                    >
                        <CloseIcon />
                    </button>
                </div>
                <div className="modal-edit-form-section">
                    <EditNoteForm note={note} editNote={editNote} />
                </div>
            </div>
        </div>
    );
}

export default EditNoteModal;
