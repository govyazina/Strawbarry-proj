import React from 'react';
import { Menu } from 'antd';
import { PhoneOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons';
import styles from './header.module.scss';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
       <div className={styles.header_wrapper}>
            <div className={styles.header_top}>
                <section className={styles.address_top}>
                  <p>Georgiou 'A 87, Germasogeia</p>
                </section>
                <section className={styles.logotype}>
                  <img src={logo} alt='logo' className={styles.logo} />
                  <div className={styles.company_name}>
                    <p className={styles.our_name}>BERRY BOUQUETS</p>
                    <p className={styles.slogan}>DON’T WORRY - EAT BERRY</p>
                  </div>
                </section>
                <section className={styles.contacts}>
                    <div className={styles.time}>
                    <p>
                        Время работы:
                    </p>
                    <p>
                        пн-вс 24 часа
                    </p>
                    </div>
                    <div className={styles.phone_number}>
                          <PhoneOutlined style={{color: '#BF4E55', fontSize: 15}}/>
                          <MailOutlined style={{color: '#BF4E55', fontSize: 15, marginTop: 40}}/>
                    </div>
                    <div className={styles.phone}>
                        
                          <p>
                            8 800 111 22 33
                          </p>
                        
                        <p>
                            Звонок бесплатный
                        </p>
                        <p>
                            info@berry_bouquets.com
                        </p>
                    </div>
                </section>
            </div>
            <Menu 
             className={styles.header}
             mode = 'horizontal'
             items = {[
              {
              label: 'Главная',
              key: 'home'
              },
              {
              label: 'О нас',
              key: 'about'
              },
              {
              label: 'Заказы',
              key: 'orders'
              }
              ]}>

            </Menu>
      </div>
      
  );
}
