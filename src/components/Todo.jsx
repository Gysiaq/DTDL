import React, { useState } from 'react'
import './Todo.css'
import { IconButton } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { style } from '@mui/system';




function Todo() {
    const [priority, setPriority] = useState(false)
    const [todo, setTodo] = useState({
        title: "",
        deadline: new Date(),
        description: ''
    })

    const toggleColor = () => {
        setPriority(!priority);
    }

    return (
        <div className='todo-container'>
            <form className='todo-form'>
                <div className='todo-main-section'>
                    <div className='todo-priority-title'>
                        <IconButton style={{
                            backgroundColor: priority == true ? "#FFD700" : "transparent"
                        }}
                            onClick={toggleColor}>
                            <StarOutlineIcon fontSize='large'></StarOutlineIcon>
                        </IconButton>
                        <input className='todo-title paragraph' placeholder='title' value={todo.title} onChange={(e) => { e.target.value(setTodo.title) }}></input>
                    </div>
                    <div className='todo-edit-delete-button'>
                        <IconButton>
                            <EditIcon fontSize='large'></EditIcon>
                        </IconButton>
                        <IconButton>
                            <DeleteIcon fontSize='large'></DeleteIcon>
                        </IconButton>
                    </div>
                </div>
                <input className='todo-date paragraph' type='date' value={todo.deadline}></input>
                <textarea className='todo-description paragraph' placeholder='description' value={todo.description}></textarea>
            </form >
        </div >
    )
}

export default Todo