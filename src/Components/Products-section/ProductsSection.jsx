import React from 'react'
import { ProductsBox } from '../../Styles/Products-section-Styles/Styles'
import AirConditioner from './../../assets/Products-images/airconditioner.jpg'
import Tv from './../../assets/Products-Images/tv.jpg'
import Cell from './../../assets/Products-Images/phone.jpg'
import Wash from './../../assets/Products-Images/washmachine.jpg'
import Stove from './../../assets/Products-Images/stove.jpg'
import Laptop from './../../assets/Products-Images/laptop.jpg'
import Fridge from './../../assets/Products-Images/fridge.jpg'
import SmartHome from './../../assets/Products-Images/smarthome.jpg'

import { Link } from 'react-router-dom'

const ProductsSection = () => {
    
    return (
        
            <ProductsBox>

                <div className='products-box-content'>
                    <div className='content-items'>
                        <Link className='link' to="/airconditioner">
                            <img src={AirConditioner}></img>
                            <h3 className='products-title'>AIR CONDITIONER</h3>
                        </Link>
                        <p className='products-sub-title'>4 PRODUCTS</p>
                    </div>

                    <div className='content-items'>
                        <Link className='link' to="/audio&video">
                            <img  src={Tv}></img>
                            <h3 className='products-title'>AUDIO & VIDEO</h3>
                        </Link>
                        <p className='products-sub-title'>5 PRODUCTS</p>
                    </div>

                    <div className='content-items'>
                        <Link className='link' to="/gadgets">
                            <img  src={Cell}></img>
                            <h3 className='products-title'>GADGETS</h3>
                        </Link>
                        <p className='products-sub-title'>6 PRODUCTS</p>
                    </div>

                    <div className='content-items'>
                        <Link className='link' to="/homeappliances">
                            <img  src={Wash}></img>
                            <h3 className='products-title'>HOME APPLIANCES</h3>
                        </Link>
                        <p className='products-sub-title'>5 PRODUCTS</p>
                    </div>
                </div>


                <div className='products-box-content'>
                    <div className='content-items'>
                        <Link className='link' to="/homeappliances">
                            <img  src={Stove}></img>
                            <h3 className='products-title'>KITCHEN APPLIANCES</h3>
                        </Link>
                        <p className='products-sub-title'>6 PRODUCTS</p>
                    </div>

                    <div className='content-items'>
                        <Link className='link' to="/homeappliances">
                            <img  src={Laptop}></img>
                            <h3 className='products-title'>PCs & LAPTOPS</h3>
                        </Link>
                        <p className='products-sub-title'>4 PRODUCTS</p>
                    </div>

                    <div className='content-items'>
                        <Link className='link' to="/homeappliances">
                            <img src={Fridge}></img>
                            <h3 className='products-title'>REFRIGERATOR</h3>
                        </Link>
                        <p className='products-sub-title'>4 PRODUCTS</p>
                    </div>

                    <div className='content-items'>
                        <Link className='link' to="/homeappliances">
                            <img  src={SmartHome}></img>
                            <h3 className='products-title'>SMART HOME</h3>
                        </Link>
                        <p className='products-sub-title'>5 PRODUCTS</p>

                    </div>
                </div>
            </ProductsBox>
        
    )
}

export default ProductsSection