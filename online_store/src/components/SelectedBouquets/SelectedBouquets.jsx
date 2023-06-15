import React, { useEffect, useState } from 'react';
// import useProductList from '../../hooks/useProductList';
import styles from './selectedBouquets.module.scss';
import OrderCart from '../../views/OrderCart/OrderCart';



function SelectedBouquets() {

  const cartData = [
    {
name:	"new_york",
name_title:	"Букет Нью-Йорк S",
sku:	41186,
type:	"bouquet",
size:	"S",
price:	1799,
count: 1,
description:	
{
title:	"Букет из клубники в шоколаде",
gift_size:	"ширина 16см х высота 22см",
ingredients:	"Свежая клубника в бельгийском шоколаде - 10 шт, клубника без шоколада- 6 шт",
product_details: {
berries: {	
0:	"клубника"
},
chocolate:
{	
0:	"молочный"
},
topping:	"малина сублимированная, кокосовая стружка"
},
photos: {
0:	"http://drive.google.com/uc?export=view&id=1WxIjt2Honsm2A9TUX0TSojukLRs1s7is",
1:	"http://drive.google.com/uc?export=view&id=1CUdv4muNXn32p_kHAflbw6KHJdsEQ9e9",
2:	"http://drive.google.com/uc?export=view&id=1qo6DNn2-rCkuyyPY14v0ORgRDRmz8-N8",
}
}
      },
{
  name:	"new_york",
  name_title:	"Букет Нью-Йорк S",
  sku:	41186,
  type:	"bouquet",
  size:	"S",
  price:	1799,
  count: 2,
  description:	
  {
  title:	"Букет из клубники в шоколаде",
  gift_size:	"ширина 16см х высота 22см",
  ingredients:	"Свежая клубника в бельгийском шоколаде - 10 шт, клубника без шоколада- 6 шт",
  product_details: {
  berries: {	
  0:	"клубника"
  },
  chocolate:
  {	
  0:	"молочный"
  },
  topping:	"малина сублимированная, кокосовая стружка"
  },
  photos: {
  0:	"http://drive.google.com/uc?export=view&id=1WxIjt2Honsm2A9TUX0TSojukLRs1s7is",
  1:	"http://drive.google.com/uc?export=view&id=1CUdv4muNXn32p_kHAflbw6KHJdsEQ9e9",
  2:	"http://drive.google.com/uc?export=view&id=1qo6DNn2-rCkuyyPY14v0ORgRDRmz8-N8",
  }
  }
}
  ]

 const [cart, setCart] = useState(cartData)
 const [total, setTotal] = useState({
  price: cart.reduce((prev, curr) =>  prev + curr.price, 0),
  count: cart.reduce((prev, curr) => prev + curr.count, 0)
 })
 
 useEffect(() => {
  setTotal({
    price: cart.reduce((prev, curr) => prev + curr.price, 0),
    count: cart.reduce((prev, curr) => prev + curr.count, 0)
  })

 }, [cart])

 const increase = () => {
  setCart(cart => {
    return cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: ++product.count,
          price: product.count*product.price
        }
      }
      return product
    })
  })
}

const decrease = () => {
  setCart(cart => {
    return cart.map((product) => {
      if (product.id === id) {
        const newCount = product.count - 1 > 1 ? product.count - 1 : 1
        return {
          ...product,
          count: newCount,
          price: newCount * product.price 
        }
      }
      return product
    })
  })
}

const changeValue = (id, value) => {
      setCart(cart => {
        return cart.map(product => {
          if (product.id === id) {
            return {
              ...product,
              count: value,
              price: value * product.price
            }
          }
          return product
        })
      })

}


 
 const products = cart.map(product =>{
  return <OrderCart product = {product} key = {product.id} increase={increase} decrease={decrease} changeValue={changeValue} />
 })

  // let sum = 0;
  // productList.forEah(el => sum += Number.parseFloat(el.price))

  return (
    <>
     <h1 className={styles.cart__header}>Корзина</h1>
          <div className={styles.table__header}>
            <div>Наименование</div>
            <div>Количество</div>
            <div>Стоимость</div>
          </div>
      <div className={styles.bouquetWrapper}>
        {products}
      </div>
      <div className={styles.table__footer}>
        <div className={styles.sum}>Сумма заказa </div>
        <div className={styles.summary}>{total.price} рублей</div>
      </div>
      
    </>
  )
}

export default SelectedBouquets;
