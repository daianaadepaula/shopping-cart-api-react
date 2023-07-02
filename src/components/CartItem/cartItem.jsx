import React from 'react';
import propTypes from 'prop-types';
import './cartItem.css';

import {BsCartDashFill} from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';

export default function CartItem({ data }){

  const {thumbnail, title, price} = data;
	
  return(
    <section className="cart-item">
      <img src={thumbnail} 
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>

        <button type="button" className="button__remove-item">
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
