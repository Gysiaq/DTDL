import React, { useState } from "react";
import "./EditNoteForm.css";

function EditNoteForm({ editNote, note }) {
    const [newNote, setNewNote] = useState(note);

    const handleChange = (e) => {
        setNewNote({ ...newNote, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        editNote(newNote);
    };
    return (
        <form>
            <div className="note-form-container">
                <h5 className="heading-5 note-form-title">Title</h5>
                <input
                    className="note-form-title-input paragraph"
                    placeholder=" title"
                    value={newNote.title}
                    onChange={handleChange}
                    name="title"
                ></input>
            </div>
            <div>
                <h5 className="heading-5 note-form-description">Description</h5>
                <textarea
                    className="note-form-description-input paragraph"
                    placeholder=" desscription"
                    value={newNote.description}
                    onChange={handleChange}
                    name="description"
                ></textarea>
            </div>
            <div className="note-form-save-button-position">
                <button
                    className="note-form-save-button paragraph"
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
