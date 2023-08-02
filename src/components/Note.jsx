import React from 'react'
import './Note.css'

function Note() {
    return (
        <div className='note-container'>
            <h2 className='heading-2 h2-style-note'>Note</h2>

            <div className='note-button-position'>
                <button className='note-button note-button-style note-button-text'><i class="bi bi-plus-lg"></i> New note</button>
            </div>

            <div className='note'>
                Note
            </div>

        </div>
    )
}

export default Note