import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FormInput, FormStyled, Button } from './searchBarStyle';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) =>{
    event.preventDefault();
    alert('teste');
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
