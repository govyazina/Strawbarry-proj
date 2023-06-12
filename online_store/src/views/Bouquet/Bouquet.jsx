import React, { useState } from 'react';
import { Select, Button, Space } from 'antd';
import styles from './bouquet.module.scss';

export default function Bouquet() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const [size] = useState('large');

  return (
    <div className={styles.container}>
      <div className={styles.bouquet_card}>
        <div className="bouquet_card_img">
          <img src="#" alt="pic" />
        </div>
        <div className={styles.bouquet_card_text}>
          <Space direction="vertical" align="start">
            <div className="bouquet_header">
              <h2>Название букета</h2>
              <p>Артикул:</p>
            </div>
            <div className="add_berries">
              <p>Украсить ягодами</p>
              <Select
                defaultValue="Без ягод"
                style={{ width: 220 }}
                onChange={handleChange}
                options={[
                  { value: 'Без ягод', label: 'Без ягод' },
                  { value: 'Голубика', label: 'Голубика' },
                  { value: 'Малина', label: 'Малина' },
                  { value: 'Голубика + малина', label: 'Голубика + малина' },
                ]}
              />

            </div>
            <div className="add_topper">
              <p>Добавить топпер в букет</p>
              <Select
                defaultValue="Без топпера"
                style={{ width: 220 }}
                onChange={handleChange}
                options={[
                  { value: 'Без ягод', label: 'Без топпера' },
                  { value: 'Голубика', label: 'Топпер "С Днем Рождения" в ассортименте' },
                  { value: 'Малина', label: 'Топпер "Люблю" в ассортименте' },
                ]}
              />
            </div>
            <div className="button">
              <Button type="primary" size={size}>
                В КОРЗИНУ
              </Button>
            </div>
            <div className="description">
              <h4>Букет из клубники в шоколаде</h4>
              <p>Состав: </p>
              <p>Размер:</p>
              <p>Натуральный продукт! Срок хранения 24 часа при температуре от +4 до +8 градусов</p>
              <p>Описание товара:</p>
              <p>ягоды - клубника,</p>
              <p>шоколад - молочный</p>
              <p>топпинг - малина сублимированная, кокосовая стружка</p>
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
}
