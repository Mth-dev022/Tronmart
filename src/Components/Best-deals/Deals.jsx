import { DealsContainer } from "../../Styles/DealsStyles/Style"
import MultiGroomer from './../../assets/Deals-images/hairgroomer.jpg'
import SmartSpeaker from './../../assets/Deals-images/smartspeaker.jpg'
import SmartHome from './../../assets/Deals-images/smarthome.jpg'
import Tablet from './../../assets/Deals-images/tablet.jpg'
import Iphone from './../../assets/Deals-images/phone01.jpg'
import Samsung from './../../assets/Deals-images/phone02.jpg'
import Laptop from './../../assets/Deals-images/laptop01.jpg'
import Laptop02 from './../../assets/Deals-images/laptop02.jpg'

import { useState, useContext } from "react"
import { cartContext } from "../../Context/CartContext"

import { MdStarOutline } from "react-icons/md";
import { RiShoppingBasketFill } from "react-icons/ri";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { v4 as uuidv4 } from 'uuid';

const Deals = () => {
  const { cartItems, setCartItems } = useContext(cartContext)
  const [isClicked, setIsClicked] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item])
  }

  const handleAddToCart = (event) => {
    const card = event.currentTarget.closest('.deals-card');
    const description = card.querySelector('.description').textContent;
    const realPriceText = card.querySelector('.real-price').textContent;
    const realPrice = parseFloat(realPriceText.replace('$', ''));
    const imageSrc = card.querySelector('img').src;

    const newItem = {
      id: uuidv4(),
      description: description,
      realPrice: realPrice,
      imageSrc: imageSrc
    };
    addToCart(newItem);
    notify()
  };

  const notify = () => toast.success("item added to cart.");

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  return (
    <DealsContainer>
      <div className="text-container">
        <span className="best-deals-span">Today's best deal </span>
        <span className="see-more-span">See more</span>
      </div>

      <div className="deals-container">

        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce />

        <div className="deals-card" >

          <span className="sale">Sale</span>
          <span
            className={`basket-icon ${isClicked ? 'clicked' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleAddToCart}
          >
            <RiShoppingBasketFill />
          </span>
          <div className="image-content">
            <img src={MultiGroomer} />
          </div>
          <div className="stars-container">
            <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" />
          </div>
          <h5 className="description">Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit</h5>
          <span className="cut-price">$49.00</span> <span className="real-price">$44.00</span>
        </div>

        <div className="deals-card" >

          <span className="sale">Sale</span>
          <span
            className={`basket-icon ${isClicked ? 'clicked' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleAddToCart}
          >
            <RiShoppingBasketFill />
          </span>
          <div className="image-content">
            <img src={SmartSpeaker} />
          </div>
          <span className="stars-container">
            <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" />
          </span>
          <h5 className="description">Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room</h5>
          <span className="cut-price">$200.00</span> <span className="real-price">$110.00</span>

        </div>

        <div className="deals-card">
        <span
            className={`basket-icon ${isClicked ? 'clicked' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleAddToCart}
          >
            <RiShoppingBasketFill />
          </span>
          <span className="sale">Sale</span>
          <div className="image-content">
            <img src={SmartHome} />
          </div>
          <div className="stars-container">
            <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" />
          </div>
          <h5 className="description">Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White</h5>
          <span className="cut-price">$160.00</span> <span className="real-price">$80.00</span>

        </div>

        <div className="deals-card">
        <span
            className={`basket-icon ${isClicked ? 'clicked' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleAddToCart}
          >
            <RiShoppingBasketFill />
          </span>
          <span className="sale">Sale</span>
          <div className="image-content">
            <img src={Tablet} />
          </div>
          <div className="stars-container">
            <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" />
          </div>
          <h5 className="description">Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model</h5>
          <span className="cut-price">$400.00</span> <span className="real-price">$310.00</span>

        </div>

      </div>

      <div className="deals-container">

        <div className="deals-card">
        <span
            className={`basket-icon ${isClicked ? 'clicked' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleAddToCart}
          >
            <RiShoppingBasketFill />
          </span>
          <span className="sale">Sale</span>
          <div className="image-content">
            <img height={'305px'} src={Iphone} />
          </div>
          <div className="stars-container">
            <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" />
          </div>
          <h5 className="description">5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid </h5>
          <span className="cut-price">$1249.00</span> <span className="real-price">$1000.00</span>
        </div>

        <div className="deals-card">
        <span
            className={`basket-icon ${isClicked ? 'clicked' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleAddToCart}
          >
            <RiShoppingBasketFill />
          </span>
          <span className="sale">Sale</span>
          <div className="image-content">
            <img src={Samsung} />
          </div>
          <span className="stars-container">
            <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" />
          </span>
          <h5 className="description">5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space </h5>
          <span className="cut-price">$900.00</span> <span className="real-price">$800.00</span>

        </div>

        <div className="deals-card">
        <span
            className={`basket-icon ${isClicked ? 'clicked' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleAddToCart}
          >
            <RiShoppingBasketFill />
          </span>
          <span className="sale">Sale</span>
          <div className="image-content">
            <img src={Laptop} />
          </div>
          <div className="stars-container">
            <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" />
          </div>
          <h5 className="description">13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce </h5>
          <span className="cut-price">$2260.00</span> <span className="real-price">$1180.00</span>

        </div>

        <div className="deals-card">
        <span
            className={`basket-icon ${isClicked ? 'clicked' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleAddToCart}
          >
            <RiShoppingBasketFill />
          </span>
          <span className="sale">Sale</span>
          <div className="image-content">
            <img src={Laptop02} />
          </div>
          <div className="stars-container">
            <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" /> <MdStarOutline className="star" />
          </div>
          <h5 className="description">15.6″ FHD Display Laptop - Intel i7 - Intel HD Graphics 6000 , Webcam, WiFi</h5>
          <span className="cut-price">$1400.00</span> <span className="real-price">$1310.00</span>

        </div>
      </div>
    </DealsContainer>
  )
}

export default Deals