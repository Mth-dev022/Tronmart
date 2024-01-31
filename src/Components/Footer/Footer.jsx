import React from 'react'
import { FooterContainer } from '../../Styles/Footer-Styles/Styles'
import { Bottom } from '../../Styles/Footer-Styles/Styles'

import SupportTeam from './../../assets/Footer/support-team.png'
import Cards from './../../assets/Footer/cards.png'
import { HiOutlineMailOpen } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className='line'></div>
        <div className='image'><img src={SupportTeam} /></div>
        <div className='support-team-container'>
          <div> <a href='#'> Expert advice </a> <h1>123-456-7890</h1> </div>
          <div> <a href='#'> Customer service </a> <h1>1-222-345-6789</h1> </div>
          <div> <a href='#'>Have any question ? </a> <h1>Contact us</h1> </div>
        </div>

        <div className='subscribe-container'>
          <div className='icon-container'>
            <HiOutlineMailOpen className='sign-up-icon' />
            <h1 className='text'>Subscribe to our newsletter</h1>
          </div>
          <p className='sign-up-text'>Sign up for all the latest news and special offers</p>
          <div className='input-container'>
            <input className='email-input' placeholder='Your email' type='email' />
            <button className='subscribe-button'>Subscribe</button>
          </div>

        </div>
      </FooterContainer>

      <Bottom>
        
        <div className='Bottom-box'>
          <span>© 2024 Electronic Store. Powered by Souza Advance</span>
          <img src={Cards} />
        </div>

      </Bottom>

    </>
  )
}

export default Footer