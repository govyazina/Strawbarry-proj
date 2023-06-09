import React from 'react';
import Title from 'antd/es/typography/Title';
import ProductFilter from '../ProductFilter/ProductFilter';
import ProductList from '../ProductList/ProductList';

export default function Main() {
  return (
    <>
      <Title>Букеты из клубники</Title>
      <ProductFilter />
      <ProductList />
    </>
  );
}
