import React, {useEffect, useState} from 'react';
import { Section } from './productsStyle';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/productCard';
import Loading from '../Loading/loading';


export default function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    fetchProducts('iphone').then((response)=>{
      setProducts(response);
      setLoading(true);
    });
  },[]);

  return (
    (loading ? <Loading /> : 
      <Section>
        <section className="products container">
          {products.map((product) => <ProductCard key={product.id} data={product} />)}
        </section>
      </Section>  
    )  
      
  );
}
