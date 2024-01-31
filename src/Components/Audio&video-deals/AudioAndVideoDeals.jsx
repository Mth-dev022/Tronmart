import React from 'react'
import { DealsContainer } from '../../Styles/DealsStyles/Style'
import { MdStarOutline } from "react-icons/md";
import { RiShoppingBasketFill } from "react-icons/ri";

import HomeTheater from './../../assets/Audio&videoDeals-images/home-theater.png'
import HomeTheater2 from './../../assets/Audio&videoDeals-images/home-theater-samsung.png'
import TvOled from './../../assets/Audio&videoDeals-images/tv-oled.png'
import Tv4k from './../../assets/Audio&videoDeals-images/tv-4k.png'

const AudioAndVideoDeals = () => {
  return (
    <DealsContainer>

      <div className="text-container">
        <span className="best-deals-span">Audio & video </span>
        <span className="see-more-span">See more</span>
      </div>

      <div className="deals-container">

        <div className="deals-card">
        <span className="basket-icon"> <RiShoppingBasketFill /></span>
          <span className="sale">Sale</span>
          <div className="image-content">
            <img width={'250px'} src={HomeTheater} />
          </div>
          <div className="stars-container">
            <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" />
          </div>
          <h5 className="description">Max SR Home Theater Surround Sound Bar HDMI, Optical Cables, Wireless</h5>
          <span className="cut-price">$629.00</span> <span className="real-price">$540.00</span>
        </div>

        <div className="deals-card">
        <span className="basket-icon"> <RiShoppingBasketFill /></span>
          <span className="sale">Sale</span>
          <div className="image-content">
            <img width={'320px'} src={HomeTheater2} />
          </div>
          <span className="stars-container">
            <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" />
          </span>
          <h5 className="description">V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer</h5>
          <span className="cut-price">$1200.00</span> <span className="real-price">$1010.00</span>
        </div>

        <div className="deals-card">
        <span className="basket-icon"> <RiShoppingBasketFill /></span>
          <span className="sale">Sale</span>
          <div className="image-content">
            <img width={'250px'} src={TvOled} />
          </div>
          <div className="stars-container">
            <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" />
          </div>
          <h5 className="description">OLED C1 Series 55” 4k Smart TV (3840 x 2160), 120Hz Refresh Rate, AI-Powered 4K</h5>
          <span className="cut-price">$900.00</span> <span className="real-price">$810.00</span>
        </div>

        <div className="deals-card">
        <span className="basket-icon"> <RiShoppingBasketFill /></span>
          <span className="sale">Sale</span>
          <div className="image-content">
            <img width={'250px'} src={Tv4k} />
          </div>
          <div className="stars-container">
            <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" />
          </div>
          <h5 className="description">X80J 42 Inch TV: 4K Ultra HD LED Smart Google TV with Dolby Vision HDR</h5>
          <span className="cut-price">$560.00</span> <span className="real-price">$380.00</span>
        </div>

      </div>
     
    </DealsContainer>
  )
}

export default AudioAndVideoDeals