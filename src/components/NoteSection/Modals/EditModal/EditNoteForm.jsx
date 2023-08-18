import React, { useState } from "react";
import "./EditNoteForm.css";

function EditNoteForm({ editNote, note, setIsEditModalOpen }) {
    const [newNote, setNewNote] = useState(note);

    const handleChange = (e) => {
        setNewNote({ ...newNote, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        editNote(newNote);
        setIsEditModalOpen(false);
    };
    return (
        <form>
            <div className="note-edit-form-container">
                <h5 className="heading-5 note-edit-form-title">Title</h5>
                <input
                    className="note-edit-form-title-input paragraph"
                    placeholder=" title"
                    value={newNote.title}
                    onChange={handleChange}
                    name="title"
                ></input>
            </div>
            <div>
                <h5 className="heading-5 note-edit-form-description">
                    Description
                </h5>
                <textarea
                    className="note-edit-form-description-input paragraph"
                    placeholder=" desscription"
                    value={newNote.description}
                    onChange={handleChange}
                    name="description"
                ></textarea>
            </div>
            <div className="note-edit-form-save-button-position">
                <button
                    className="note-edit-form-save-button paragraph"
                    type="submit"
                    onClick={handleUpdate}
                >
                    Update
                </button>
            </div>
        </form>
    );
}

export default EditNoteForm;
