import React, { useState } from 'react'
import './ModalNoteForms.css'

function ModalNoteForms({addNote}) {
    const [note, setNote] = useState({
        title: '',
        description: ''
    })

    
    

    return (
        <form >
            <div className='note-form-container'>
                <h5 className='heading-5 note-form-title'>Title</h5>
                <input className='note-form-title-input paragraph' placeholder=' title' value={note.title} onChange={e => {setNote(e.target.value)}}></input>
            </div>
            <div>
                <h5 className='heading-5 note-form-description'>Description</h5>
                <textarea className='note-form-description-input paragraph' placeholder=' desscription' value={note.description} onChange={e => {setNote(e.target.value)}}></textarea>
            </div>
            <div className='note-form-save-button-position'>
                <button className='note-form-save-button paragraph' type='submit' onClick={addNote}>Save</button>
            </div>
        </form>
    )


}

export default ModalNoteForms