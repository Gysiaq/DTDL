import React, { useState } from "react";
import "./AddNoteForm.css";

function AddNoteForm({ save }) {
    const [note, setNote] = useState({
        title: "",
        description: "",
        id: crypto.randomUUID(),
    });

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        save(note);
    };

    return (
        <form>
            <div className="note-form-container">
                <h5 className="heading-5 note-form-title">Title</h5>
                <input
                    className="note-form-title-input paragraph"
                    placeholder=" title"
                    value={note.title}
                    onChange={handleChange}
                    name="title"
                ></input>
            </div>
            <div>
                <h5 className="heading-5 note-form-description">Description</h5>
                <textarea
                    className="note-form-description-input paragraph"
                    placeholder=" desscription"
                    value={note.description}
                    onChange={handleChange}
                    name="description"
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
