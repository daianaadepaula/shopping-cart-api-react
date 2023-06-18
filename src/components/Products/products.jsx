import React, {useContext, useEffect} from 'react';
import { Section } from './productsStyle';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/productCard';
import Loading from '../Loading/loading';
import AppContext from '../../context/AppContext';


export default function Products() {

  const {products, setProducts, loading, setLoading} = useContext(AppContext);
 

  useEffect(() =>{
    fetchProducts('iphone').then((response)=>{
      setProducts(response);
      setLoading(false);
    });
  },[]);

  return (
    (loading && <Loading />) || (
      <Section>
        <section className="products container">
          {products.map((product) => <ProductCard key={product.id} data={product} />)}
        </section>
      </Section>
    )
      
  );
}
