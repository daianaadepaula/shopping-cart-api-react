import React from 'react';
import './cart.css';
import CartItem from '../CartItem/cartItem';

export default function Cart (){
  return (
    <section className="cart">
      <div className="cart-items">
        <CartItem data={{thumbnail: '', title: '', price: '123'}} />
      </div>

      <div className="cart-resume">resumo do carrinho</div>
    </section>
  );
}
