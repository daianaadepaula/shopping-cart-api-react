import React, {useEffect, useState} from 'react';
import { Section } from './productsStyle';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/productCard';


export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetchProducts('iphone').then((response)=>{
      setProducts(response);
    });
  },[]);

  return (    
    <Section>
      <section className="products container">
        {
          products.map((product) => <ProductCard key={product.id} data={product} />)
        }
      </section>
    </Section>    
  );
}
