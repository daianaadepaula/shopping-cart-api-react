import React from 'react';
import { Button } from '../CartButton/CartButtonStyle';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function CartButton() {
  return (
    <Button type="button" className="cart_button">
      <AiOutlineShoppingCart />
      <span className="cart-status">1</span>
    </Button>
  );
}
