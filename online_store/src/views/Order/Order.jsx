import React from 'react';
import { Link } from 'react-router-dom';
import styles from './order.module.scss';
import { CloseOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
// import useProductList from '../../hooks/useProductList';
// import styles from './order.module.scss';

// import {deleteCartAC} from '../../store/actions/mainActions';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useState } from 'react';

function Order(props) {

  // const [quantity, setQuantity] = useState(1)

  // const cart = productList

  // const cartItem = cart.map(item => ({...productList.find(a => a.id), ...item}))

    // const {id} = useParams();

    // const dispatch = useDispatch();

    // const deleteCart = (id) => {
    //     dispatch(deleteCartAC(id))
    // }

    

    return (
        <>
          <h1 className={styles.cart__header}>Корзина</h1>
          <div className={styles.table__header}>
            <div>Наименование</div>
            <div>Количество</div>
            <div>Стоимость</div>
          </div>
          <section className={styles.order__wrap}>
          <div className={styles.cart__body}>
            <div className={styles.bouquetPic}>
              <img className={styles.cartPic} src='https://avatars.mds.yandex.net/i?id=61f45c2a30854ed7c31bcc4b2b8ab7ba0f7e3f97-9214528-images-thumbs&n=13' alt='choicePic' />
              <div className={styles.bouquetView}>
              <Link to={"/bouquet/${id}"} className={styles.link}>
                bouquet.name
              </Link>
              <p className={styles.addings}>
                bouquet.description
              </p>
            </div>
          </div>

          </div>
          
          <div className={styles.quantity}>
            <input type='number' className={styles.count__input} min='1' value='1' />
            <div className={styles.control}>
            <button className={styles.button__quantity}>
              <UpOutlined />
            </button>
            <button className={styles.button__quantity}>
              <DownOutlined />
            </button>
            </div>
            {/* <button className={styles.button__quantity}
            // onClick={setQuantity(id, -1)}
            >-</button>
            <p>quantity</p>
            <button className={styles.button__quantity}
            // onClick={setQuantity(id, +1)}
            >+</button> */}
          </div>
          <div className='price'>Стоимость</div>
          <div className='delete'>
            <CloseOutlined />
            {/* <button 
              // onClick={() => deleteCart(id)}
              >delete</button> */}
          </div>      
       </section>
      </>
    );
}

export default Order;