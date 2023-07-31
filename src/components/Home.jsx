import React from 'react'

function Home({ name }) {
    return (
        <div className='home-main'>
            <h1 className='heading-1'>Have a nice Day {name}</h1>

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