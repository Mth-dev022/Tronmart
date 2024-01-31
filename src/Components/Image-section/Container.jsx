import React from 'react'
import { ImageSection } from '../../Styles/Image-section-Styles/Styles'
import { BottomBox } from '../../Styles/Image-section-Styles/Styles';

import { IoLogoDropbox } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineTextsms } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa";

const Container = () => {
  return (
    <ImageSection>
      <div className='image'>
      <div className='brow-box'>
        <div className='brow-box-content'>
          <IoLogoDropbox className='brow-box-icon' />
          <h5 className='brow-box-logo-text'>Logoipsum</h5>
          <h1 className='brow-bow-paragraph'>The best home entertainment system is here</h1>
          <p className='brow-box-text'>Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.</p>
          <button>Shop now</button>
        </div>
      </div>
      </div>

        <BottomBox>
          <div className='content'>

            <div className='content-items'>
              <TbTruckDelivery className='icons' />
              <h5 className='items-01'>Free shipping</h5>
              <span className='items-02'>When you spend 80% or more</span>
            </div>

            <div className='content-items'>
              <MdOutlineTextsms className='icons' />
              <h5 className='items-01'>We are available 24/7</h5>
              <span className='items-02'>Need help? contact us anytime</span>
            </div>

            <div className='content-items'>
              <AiOutlineReload className='icons' />
              <h5 className='items-01'>Satisfied or return</h5>
              <span className='items-02'>Easy 30-day return policy</span>
            </div>

            <div className='content-items'>
              <FaCreditCard className='icons' />
              <h5 className='items-01'>100% secure payments</h5>
              <span className='items-02'>Visa, Mastercard, Stripe, PayPal</span>
            </div>

          </div>
          
      </BottomBox>
    </ImageSection>
  )
}

export default Container