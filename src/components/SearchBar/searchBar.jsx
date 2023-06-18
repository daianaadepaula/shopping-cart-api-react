import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FormInput, FormStyled, Button } from './searchBarStyle';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

export default function SearchBar() {
  const {setProducts, setLoading} = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) =>{
    event.preventDefault();
    setLoading(true);
    
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <FormStyled onSubmit={handleSearch}>
      <FormInput
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search_input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <Button type="submit" className="search_button">
        <BsSearch />
      </Button>
    </FormStyled>
  );
}
