import React, {useEffect, useState} from 'react';
import { Section } from './productsStyle';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/productCard';


export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetchProducts('iphone').then((response)=>{
      setProducts(response);
      console.log(products);
    });
  },[]);

  return (    
    <Section>
      <section className="products container">
        <ProductCard />
      </section>
    </Section>    
  );
}
