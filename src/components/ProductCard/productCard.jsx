import React from 'react';
import {BsFillCartPlusFill} from 'react-icons/bs';
import { Section } from '../ProductCard/productCardStyle';

export default function ProductCard() {
  return (
    <Section>
      <section className="product-card">       
		
        <img src="http://http2.mlstatic.com/D_739807-MLA46114620155_052021-W.jpg" 
          alt="produto" 
          className="card__image" />

        <div className="card__infos">
          <h2 className="card__price">R$ 200,20</h2>
          <h2 className="card__title">Iphone</h2>
        </div>

        <button type="button" className="button__add-cart">
          <BsFillCartPlusFill />
        </button>

      </section>
    </Section> 
  );
}
