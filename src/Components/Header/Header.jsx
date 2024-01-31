import React from 'react'
import { HeaderContainer } from '../../Styles/HeaderStyles/HeaderContainer'

import NavItems from './NavItems'

import { FaCircleDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <HeaderContainer>
            <div className='content-area'>
                <div className='sup-header'>
                    <h5>24/7 Customer service 1-800-234-5678</h5>
                    <div className='sup-header-right-menu'>
                        <h5 className='shipping'>Shipping & return</h5>
                        <h5>Track order</h5>
                    </div>

                </div>

                <div className='middle-header'>
                    <FaCircleDot className='circle' />
                    <h3>Tronmart</h3>
                    <div className='search-area'>
                        <input type='Search'
                            placeholder='Search'
                        ></input>
                        <button>
                            <FaSearch className='search-icon' />
                        </button>
                    </div>

                </div>

                <div className='bottom-header'>
                    <NavItems />
                </div>

            </div>
        </HeaderContainer>
    )
}

export default Header