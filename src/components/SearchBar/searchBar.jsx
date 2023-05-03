import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { FormInput, FormStyled, Button } from './searchBarStyle';

export default function SearchBar() {
  return (
    <FormStyled>
      <FormInput
        type="search"
        placeholder="Buscar produtos"
        className="search_input"
        required
      />
      <Button type="submit" className="search_button">
        <BsSearch />
      </Button>
    </FormStyled>
  );
}
