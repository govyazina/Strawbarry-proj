import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCartAC } from '../../store/actions/mainActions';

export default function AddToCartBtn({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = (event) => {
    event.stopPropagation();
    const orderItem = {
      id: 0,
      sku: product.sku,
      berries: 'none',
      topper: 'none',
      quantity: 1,
      price: product.price,
    };
    dispatch(addToCartAC(orderItem));
  };
  return (
    <Button
      type="primary"
      onClick={handleAddToCart}
    >
      + в корзину
    </Button>
  );
}
