/* eslint-disable react/prop-types */
import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonGroup from 'antd/es/button/button-group';
import { addToCartAC, removeFromCartAC } from '../../store/actions/mainActions';
import styles from './addtocartbtn.module.scss';

export default function AddToCartBtn({ orderItem }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.mainStore);
  const quantity = cart.filter((item) => item.sku === orderItem.sku)
    .reduce((acc, el) => acc + el.quantity, 0);
  const handleRemoveFromCart = (event) => {
    event.stopPropagation();
    dispatch(removeFromCartAC(orderItem.sku));
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    dispatch(addToCartAC(orderItem));
  };

  return quantity === 0 ? (
    <Button
      type="primary"
      onClick={handleAddToCart}
      id={styles.add_cart_btn}
    >
      + в корзину
    </Button>
  )
    : (
      <div>
        <ButtonGroup>
          <Button
            onClick={handleRemoveFromCart}
            id={styles.btn_group}
          >
            –
          </Button>
          <Button
            disabled
            id={styles.counter}
          >
            {quantity}
          </Button>
          <Button
            onClick={handleAddToCart}
            id={styles.btn_group}
          >
            +
          </Button>
        </ButtonGroup>
      </div>
    );
}
