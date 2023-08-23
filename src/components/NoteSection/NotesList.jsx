import React, { useState } from "react";
import AddNoteModal from "./Modals/AddModal/AddNoteModal";
import "./NotesList.css";
import Note from "./Note";

function NotesList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [noteList, setNoteList] = useState([]);

    const addNote = (note) => {
        setNoteList((oldList) => [...oldList, note]);
        console.log(note);
        setIsModalOpen(false);
    };

    const deleteNote = (id) => {
        const newNoteList = noteList.filter((note) => note.id !== id);
        setNoteList(newNoteList);
    };

    const editNote = (newNote) => {
        const newNoteList = noteList.map((note) =>
            note.id === newNote.id ? newNote : note
        );
        setNoteList(newNoteList);
    };

    return (
        <div className="notes-container" id="notelist">
            <h2 className="heading-2 h2-style-note">Notes</h2>

            <div className="note-button-position">
                <button
                    className="note-button note-button-style note-button-text"
                    onClick={() => setIsModalOpen(true)}
                >
                    <i className="bi bi-plus-lg"></i> New note
                </button>
            </div>
            {isModalOpen && (
                <AddNoteModal
                    setIsModalOpen={setIsModalOpen}
                    handleSave={addNote}
                />
            )}
            <div className="note paragraph">
                {noteList.length === 0 && "Your notes are empty"}
                {noteList.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        id={note.id}
                        deleteNote={deleteNote}
                        editNote={editNote}
                    />
                ))}
            </div>
        </div>
    );
}

export default NotesList;
