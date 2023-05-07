import React from 'react';
import { ContHeader } from './headerStyle';
import SearchBar from '../SearchBar/searchBar';
import CartButton from '../CartButton/CartButton';

export default function Header() {
  return (
    <ContHeader>
      <div className="container">
        <SearchBar />
        <CartButton />
      </div>
    </ContHeader>
  );
}
