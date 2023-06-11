import React, { useEffect } from 'react';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import { useDispatch } from 'react-redux';
import styles from './main.module.scss';
import ProductFilter from '../ProductFilter/ProductFilter';
import ProductList from '../ProductList/ProductList';
import { getProductListThunk } from '../../store/actions/mainActions';

export default function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProductListThunk(),
    );
  }, []);
  return (
    <main className={styles.main}>
      <Title>Букеты из клубники</Title>
      <ProductFilter />
      <ProductList />
      <Paragraph>
        Предлагаем по-новому взглянуть на традиции преподносить букеты:
        в дополнении к цветам можно использовать
        красивые, ароматные ягоды, покрытые нежным бельгийским шоколадом.
        Такие десерты будут одинаково приятны
        взрослым и детям.
        Шоколад может быть не только классическим темным и молочным,
        но и белым или даже
        розовым. На сайте наглядно продемонстрированы варианты подобных подарков.
      </Paragraph>
      <Paragraph>
        Прекрасно смотрятся букеты из клубники в розовом и белом шоколаде.
        Они ассоциируются с нежными
        чувствами,
        любовью, желанием заботиться и дарить много радостных моментов в жизни.
        На нашем сайте вы
        можете выбрать ягодные букеты и получить их с доставкой по Кипру.
        Кроме клубники мы
        используем
        голубику и малину, которые поступают в производство только после тщательного отбора.
      </Paragraph>
    </main>
  );
}
