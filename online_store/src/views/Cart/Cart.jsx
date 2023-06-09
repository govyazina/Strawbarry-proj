import React from 'react';
import SelectedBouquets from '../../components/SelectedBouquets/SelectedBouquets';
import OrderForm from '../../components/OrderForm/OrderForm';
import styles from './cart.module.scss';

function Cart() {
  return (
    <div className={styles.wrapper}>
      <SelectedBouquets />
      <OrderForm />
    </div>
  );
}

export default Cart;
