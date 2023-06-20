import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';
import logo from '../../assets/images/logo.png';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footer__logo}>
        <img src={logo} className={styles.footer__img} alt="logo" />
        <div className={styles.footer__logo_wrapper}>
          <div className={styles.footer__name}>
            BERRY BOUQUETS
          </div>
          <div className={styles.footer__slogan}>
            DON’T WORRY - EAT BERRY
          </div>
        </div>
      </div>
      <div className={styles.footer__middle}>
        <Link to="/about" className={styles.footer__about}>
          О нас
        </Link>
        <div className={styles.footer__disclaimer}>
          Данное приложение является Pet-проектом команды frontend-разработчиц
        </div>
      </div>
    </section>
  );
}
