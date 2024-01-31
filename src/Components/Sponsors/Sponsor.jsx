import React from 'react'
import { SponsorContainer } from '../../Styles/SponsorStyles/Styles'

const Sponsor = () => {
    return (
        <SponsorContainer>
            <div className='sponsor-content first'>
                <h1 className='sponsor-content-paragraph'>Wireless headphones</h1>
                <p className='sponsor-content-price'>Starting at $49</p>
                <button className='sponsor-content-shop'>Shop now</button>
               
            </div>

            <div className='sponsor-content second'>
                <h1 className='sponsor-content-paragraph'>Grooming</h1>
                <p className='sponsor-content-price'>Starting at $49</p>
                <button className='sponsor-content-shop'>Shop now</button>
            </div>

            <div className='sponsor-content third'>
                <h1 className='sponsor-content-paragraph'>Video games</h1>
                <p className='sponsor-content-price'>Starting at $49</p>
                <button className='sponsor-content-shop'>Shop now</button>
            </div>
        </SponsorContainer>
    )
}

export default Sponsor