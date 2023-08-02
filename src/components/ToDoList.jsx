import React from 'react'
import './ToDoList.css'

function ToDoList() {
    return (
        <div>

            <div className='todolist-container'>

                <h2 className='heading-2 h2-style-todolist'>To Do List</h2>

                <div className='todolist-button-position'>
                    <button className='todolist-button todolist-button-style todolist-button-text'><i class="bi bi-plus-lg"></i> New task</button>
                </div>
                <div className='todolist'>
                    Todo
                </div>
            </div>
        </div>
    )
}

export default ToDoList