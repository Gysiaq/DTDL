import React, { useState } from "react";
import "./NoteForm.css";

function NoteForm({ save, note, setIsModalOpen }) {
    const [newNote, setNewNote] = useState(
        note
            ? note // we are editing
            : {
                  title: "",
                  description: "",
                  id: crypto.randomUUID(),
              } // we are adding a new note
    );

    const handleChange = (e) => {
        setNewNote({ ...newNote, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        save(newNote);
        setIsModalOpen(false);
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
                    placeholder="description"
                    value={newNote.description}
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
                    {!note ? "Add" : "Update"}
                </button>
            </div>
        </form>
    );
}

export default NoteForm;
