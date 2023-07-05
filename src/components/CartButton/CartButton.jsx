import React, { useContext } from 'react';
import { Button } from '../CartButton/CartButtonStyle';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import AppContext from '../../context/AppContext';

export default function CartButton() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);
	
  return (
    <Button type="button" className="cart_button" onClick={() => setIsCartVisible(!isCartVisible)}>
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </Button>
  );
}
