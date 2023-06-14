import React from 'react';
import propTypes from 'prop-types';
import {BsFillCartPlusFill} from 'react-icons/bs';
import { Section } from '../ProductCard/productCardStyle';

export default function ProductCard({data}) {

  const {title, thumbnail, price} = data;

  return (
    <Section>
      <section className="product-card">       
		
        <img src={thumbnail.replace(/\w\.jpg/gi,'W.jpg')}
          alt="produto" 
          className="card__image" />

        <div className="card__infos">
          <h2 className="card__price">{price}</h2>
          <h2 className="card__title">{title}</h2>
        </div>

        <button type="button" className="button__add-cart">
          <BsFillCartPlusFill />
        </button>

      </section>
    </Section> 
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
