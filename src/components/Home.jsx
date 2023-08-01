import React from 'react'
import './Home.css'

function Home({ name }) {
    return (
        <div className='home-main'>
            <h1 className='heading-1 h1-style'>Have a nice Day</h1>
            <h1 className='heading-1 h1-style'>{name}</h1>

            <div className='buttons-section'>
                <button className='btn'></button>
                <button className='btn'></button>
                <button className='btn'></button>
                <button className='btn'></button>
            </div>
        </div>
    )
}

export default Home