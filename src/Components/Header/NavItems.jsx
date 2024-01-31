import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from '../../Styles/HeaderStyles/NavItemsStyles';
import { RiShoppingBasketFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';

const NavItems = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const handleMouseEnter = () => {
    setMouseEnter(true);
  }
  const handleMouseLeave = () => {
    setMouseEnter(false);
  }
  const { cartItems } = useContext(cartContext)

  return (
    <NavLinks>
      <div className='items-all-product'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>

        All Products <MdKeyboardArrowDown className='nav-icon' />
        {mouseEnter && (
          <div className='dropdown-menu'>
            <Link to="/airconditioner" className='items'>Air conditioner</Link>
            <Link to="/kitchenappliances" className='items'>Kitchen appliances</Link>
            <Link to="/pcs&laptops" className='items'>PCs & laptops</Link>
            <Link to="/gadgets" className='items'>Gadgets</Link>
            <Link to="/smarthome" className='items'>Smart home</Link>
          </div>
        )}
      </div>

      <Link to="/homeAppliances" className='items'>Home appliances</Link>
      <Link to="/audio&video" className='items'>Audio & video</Link>
      <Link to="/refrigerator" className='items'>Refrigerator</Link>
      <Link to="/newarrivals" className='items'>New Arrivals</Link>
      <Link to="/todaysdeal" className='items'>Today's deal</Link>
      <Link to="/giftcards" className='items'>Gift cards</Link>

      <div className='basket-area'>
        <Link to='/cart' className='icon-item'><RiShoppingBasketFill className='basket-icon' /></Link>
        <span>{cartItems.length}</span>
      </div>
      <Link to="/login" className='items'>Log in</Link>
    </NavLinks>
  )
}
export default NavItems;
