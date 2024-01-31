import React from 'react'
import { BrandsContainer } from '../../Styles/Brands-deals-Styles/Styles'
import { LogoContainers } from '../../Styles/Brands-deals-Styles/Styles'

import WashMachine from './../../assets/Brands-Deals-images/wash-machine.jpg'
import Logo01 from './../../assets/Brands-Deals-images/logo01.svg'
import Logo02 from './../../assets/Brands-Deals-images/logo02.svg'
import Logo03 from './../../assets/Brands-Deals-images/logo03.svg'
import Logo04 from './../../assets/Brands-Deals-images/logo04.svg'
import Logo05 from './../../assets/Brands-Deals-images/logo05.svg'
import Logo06 from './../../assets/Brands-Deals-images/logo06.svg'

const BrandsDeals = () => {
    return (
        <>
            <BrandsContainer>
                <div className='brands-container-content'>
                    <h5 className='content-top-text'>BRAND'S DEAL</h5>
                    <h1 className='content-middle-text'>Save up to $200 on select Samsung washing machine</h1>
                    <h5 className='content-bottom-text'>Tortor purus et quis aenean tempus tellus fames.</h5>
                    <button className='shopNow'>Shop now</button>
                </div>
                <div className='image'> <img src={WashMachine} /> </div>
            </BrandsContainer>

            <LogoContainers>
                <h1 className='paragraph'>Top brands</h1>
                <div className='top-brands'>
                    <div className='brands-icons'> <img src={Logo01} /> </div>
                    <div className='brands-icons'> <img src={Logo02} /> </div>
                    <div className='brands-icons'> <img src={Logo03} /> </div>
                    <div className='brands-icons'> <img src={Logo04} /> </div>
                    <div className='brands-icons'> <img src={Logo05} /> </div>
                    <div className='brands-icons'> <img src={Logo06} /> </div>

                </div>
            </LogoContainers>
        </>

    )
}

export default BrandsDeals