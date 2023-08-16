import React, { useState } from "react";
import EditNoteModal from "./Modals/EditModal/EditNoteModal";
import "./Note.css";
import { IconButton } from "@mui/material";
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
                <div className="note-buttons-section">
                    <IconButton
                        className="note-edit-button"
                        onClick={() => {
                            setIsEditModalOpen(true);
                        }}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        className="note-close-button"
                        onClick={handleDelete}
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
                <span className="note-title heading-5">{note.title}</span>
                <span className="note-description paragraph">
                    {note.description}
                </span>
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
