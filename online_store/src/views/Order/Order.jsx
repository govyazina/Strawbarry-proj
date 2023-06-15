import React from 'react';
import { Link } from 'react-router-dom';
import styles from './order.module.scss';
import { CloseOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import {deleteCartAC} from '../../store/actions/mainActions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


function Order({product, increase, decrease}) {

  
  
    // const {id} = useParams();
    const dispatch = useDispatch();
    const deleteCart = (id) => {
        dispatch(deleteCartAC(id))
        console.log('delete', id)
    }

    const { description, picture, price, count } = product;

    
    const cartSummary = 0
    function getSummary () {
      cartData.map( el => {
        if (el.id===id) {
          cartSummary = el.price + el.topping.price
        }
        return cartSummary
      })
    }

    

    return (
        <>
         
          <section className={styles.order__wrap}>
          <div className={styles.cart__body}>
            <div className={styles.bouquetPic}>
              <img className={styles.cartPic} src='' alt='choicePic' />
              <div className={styles.bouquetView}>
              <Link to={"/bouquet/${id}"} className={styles.link}>
                {product.name_title}
              </Link>
              <p className={styles.addings}>
                <p> {description.title}</p>
                {/* <p>Ягоды: {product.description.product_details.berries}</p> */}
                <p>Топпинги: {description.product_details.topping}</p>
              </p>
            </div>
          </div>

          </div>
          
          <div className={styles.quantity}>
            <input type='number' className={styles.count__input} min='1' value={count} onChange={(e) => changeValue(id, +e.target.value)} />
            <div className={styles.control}>
            <button className={styles.button__quantity} onClick={() => increase(id)}>
              <UpOutlined />
            </button>
            <button className={styles.button__quantity} onClick={() => decrease(id)}>
              <DownOutlined />
            </button>
            </div>
          </div>
          <div className='price'>{price}</div>
          <div className='delete'>
            <CloseOutlined onClick={() => deleteCart(id)}/>
          </div>      
       </section>
      </>
    );
}

export default Order;