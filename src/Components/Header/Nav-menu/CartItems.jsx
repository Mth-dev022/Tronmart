import React, { useContext } from 'react';
import { cartContext } from './../../../Context/CartContext';
import { formatCurrency } from '../../../services/formatCurrency';

import { Modal } from '../../../Styles/HeaderStyles/NavItemsStyles';
import { TotalPrice } from '../../../Styles/HeaderStyles/NavItemsStyles';

import { BsFillCartDashFill } from "react-icons/bs";

const CartItems = () => {
    const { cartItems, setCartItems } = useContext(cartContext)

    const totalPrice = cartItems.reduce((acc, item) => acc + item.realPrice, 0)

    const removeItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id)
        setCartItems(updatedCartItems)
        console.log(updatedCartItems)
    };
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <Modal>
                    {cartItems.length > 0 ? (
                        cartItems.map((data) => (
                            <div key={data.id} className="modal-content">
                                <img width={'100px'} src={data.imageSrc} alt={data.description} />
                                <p className='description'>{data.description}</p>
                                <h5 className='price'>{data.realPrice}</h5>
                                <BsFillCartDashFill className='icon' onClick={() => removeItem(data.id)} />
                            </div>
                        ))
                    ) : ('Your shopping cart is empty')}
                </Modal>
                <TotalPrice className='total'> Preço total ${formatCurrency(totalPrice, 'BRL')}</TotalPrice>
            </div>
        </>
    )
}
export default CartItems;
