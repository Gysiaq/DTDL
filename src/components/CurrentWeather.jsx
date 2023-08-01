import React from 'react'
import './CurrentWeather.css'

function CurrentWeather() {
    return (
        <div>
            <h3 className='heading-3'>Today</h3>
            <h5>06/27/2023</h5>

            <div>
                <icon></icon>
                <h3>6 stopni C</h3>
                <h4>cloudy</h4>
            </div>

            <div>
                <div>
                    <icon></icon>
                    <span className='paragraph'>Real fell: 4 syopni C</span>
                </div>

                <div>
                    <icon></icon>
                    <span className='paragraph'>Real fell: 4 syopni C</span>
                </div>

                <div>
                    <icon></icon>
                    <span className='paragraph'>Real fell: 4 syopni C</span>
                </div>

                <div>
                    <icon></icon>
                    <span className='paragraph'>Real fell: 4 syopni C</span>
                </div>
            </div>

            <div>
                <div>
                    <icon></icon>
                    <span className='paragraph'>Real fell: 4 syopni C</span>
                </div>
                <div>
                    <icon></icon>
                    <span className='paragraph'>Real fell: 4 syopni C</span>
                </div>
            </div>

            <h5>Hourly Forecase</h5>
            <hr />
        </div>
    )
}

export default CurrentWeather