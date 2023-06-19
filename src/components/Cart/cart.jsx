import React from 'react';
import './cart.css';
import CartItem from '../CartItem/cartItem';

export default function Cart (){
  return (
    <section className="cart">
      <div className="cart-items">
        <CartItem />
      </div>

      <div className="cart-resume">resumo do carrinho</div>
    </section>
  );
}
