import React, { useState } from 'react'

function Note({note = {title, description}, id, deleteNote}) {
    <div>
        <label>
            <span>{note.title}</span>
            <div>
                <button onClick={() => editNote(id)}>Edit</button>
                <button onClick={() => deleteNote(id)}>Delete</button>
            </div>
            <span>{note.description}</span>
        </label>

    </div>
}

export default Note