import React, { useState } from "react";
import "./AddNoteForm.css";

function AddNoteForm({ save }) {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteDescription, setNoteDescription] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "noteTitle") {
            setNoteTitle(value);
        } else {
            setNoteDescription(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        save({
            title: noteTitle,
            description: noteDescription,
            id: crypto.randomUUID(),
        });
    };

    return (
        <form>
            <div className="note-form-container">
                <h5 className="heading-5 note-form-title">Title</h5>
                <input
                    className="note-form-title-input paragraph"
                    placeholder=" title"
                    value={noteTitle}
                    onChange={handleChange}
                    name="noteTitle"
                ></input>
            </div>
            <div>
                <h5 className="heading-5 note-form-description">Description</h5>
                <textarea
                    className="note-form-description-input paragraph"
                    placeholder=" desscription"
                    value={noteDescription}
                    onChange={handleChange}
                    name="noteDescription"
                ></textarea>
            </div>
            <div className="note-form-save-button-position">
                <button
                    className="note-form-save-button paragraph"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export default AddNoteForm;
