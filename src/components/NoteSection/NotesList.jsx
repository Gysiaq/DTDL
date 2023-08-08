import React, { useState } from 'react'
import ModalNote from './ModalNote'
import './NotesList.css'
import Note from './Note'
import ModalNoteForms from './ModalNoteForms'


function NotesList({}) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [notes, setNotes] = useState([])

    const addNote = (title, description) => {
        setNotes(currentNotes => {
            return [
                ...currentNotes, {id: crypto.randomUUID(), title, description}
            ]
        })
    }
    return (
        <div className='note-container' id='notelist'>
            <h2 className='heading-2 h2-style-note'>Notes</h2>

            <div className='note-button-position'>
                <button className='note-button note-button-style note-button-text' onClick={()=> setIsModalOpen(true)}><i class="bi bi-plus-lg"></i> New note</button>
            </div>
                {isModalOpen && <ModalNote setIsModalOpen={setIsModalOpen}/>}
            <div className='note'>
                {/* {notes.length == 0 && "Nothing to do"} */}
                {/* <ModalNoteForms onSubmit={addNote}/> */}
                <Note notes={notes}/>

</div>
        </div>
    )
}

export default NotesList