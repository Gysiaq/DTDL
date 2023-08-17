import React, { useState } from "react";
import EditNoteModal from "./Modals/EditModal/EditNoteModal";
import "./Note.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Note({ id, note, deleteNote, editNote }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleDelete = () => {
        deleteNote(id);
    };

    return (
        <div className="note-container">
            <label className="text-style">
                <span className="note-title heading-5">{note.title}</span>
                <span className="note-description paragraph">
                    {note.description}
                </span>
                <div className="note-buttons-section">
                    <button
                        className="note-edit-button paragraph"
                        onClick={() => {
                            setIsEditModalOpen(true);
                        }}
                    >
                        <EditIcon fontSize="12px" /> Edit
                    </button>
                    <button
                        className="note-close-button paragraph"
                        onClick={handleDelete}
                    >
                        <DeleteIcon fontSize="12px" /> Delete
                    </button>
                </div>
            </label>
            {isEditModalOpen && (
                <EditNoteModal
                    setIsEditModalOpen={setIsEditModalOpen}
                    note={note}
                    editNote={editNote}
                />
            )}
        </div>
    );
}

export default Note;
