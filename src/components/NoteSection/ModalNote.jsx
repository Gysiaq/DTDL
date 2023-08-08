import React from 'react'
import ModalNoteForms from './ModalNoteForms'
import './ModalNote.css'

import CloseIcon from '@mui/icons-material/Close';

function ModalNote({setIsModalOpen}) {

  return (
    <div className='modal-background modal-position'>
      <div className='modal-container'>
        <div className='modal-close-button-position'> 
          <button className=' modal-close-button-style' onClick={() => {setIsModalOpen(false)}}><CloseIcon/></button>
        </div>
        <div className='modal-form-section'> 
          <ModalNoteForms/>
        </div>
      </div>
    </div>
  )
}

export default ModalNote