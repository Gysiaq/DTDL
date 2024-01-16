import React from "react";
import NoteForm from "./NoteForm";
import "./EditNoteModal.css";
import CloseIcon from "@mui/icons-material/Close";

function EditNoteModal({ setIsModalOpen, note, editNote }) {
    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-close-button-container">
                    <button
                        className="modal-close-button"
                        onClick={() => {
                            setIsModalOpen(false);
                        }}
                    >
                        <CloseIcon />
                    </button>
                </div>
                <div className="modal-form-section">
                    <NoteForm
                        note={note}
                        save={editNote}
                        setIsModalOpen={setIsModalOpen}
                    />
                </div>
            </div>
        </div>
    );
}

export default EditNoteModal;
