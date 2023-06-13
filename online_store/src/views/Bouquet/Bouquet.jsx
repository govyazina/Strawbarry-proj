import React, { useState } from 'react';
import { Select, Button, Space, Carousel, Col, Row } from 'antd';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import useProductList from '../../hooks/useProductList';
import styles from './bouquet.module.scss';

export default function Bouquet() {
  const { id } = useParams();
  const product = useProductList(id);
  console.log(product);
  console.log(product.photos);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const [size] = useState('large');

  return (
    <div className={styles.container}>
      <Row>
        <Col span={12}>
          <Carousel autoplay>
              {product.photos.map((photo) => (
                <div key={product.name_title}>
                  <img
                    src={`${photo}`}
                    alt='bouquet'
                    className={styles.carouselImage}
                  />
                </div>
              ))}
            </Carousel>
        </Col>
        <Col span={12}>
          <div className={styles.bouquet_card_text}>
            <Space direction="vertical" align="start">
              <div className="bouquet_header">
                <h2>{product.name_title}</h2>
                <p>Артикул: {product.sku}</p>
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
                <h4>{product.description.title}</h4>
                <p>Состав: {product.description.ingredients}</p>
                <p>Размер: {product.description.gift_size}</p>
                <p><SmileTwoTone twoToneColor="#52c41a" /> Натуральный продукт! Срок хранения 24 часа при температуре от +4 до +8 градусов</p>
                <p><HeartTwoTone twoToneColor="#eb2f96" /> Безопасно! Букет бережно упакован в прозрачную пленку для защиты от внешних факторов.</p>
                <h4>Описание товара:</h4>
                <p>ягоды - {product.description.product_details.berries},</p>
                <p>шоколад - {product.description.product_details.chocolate}</p>
                <p>топпинг - {product.description.product_details.topping}</p>
                <p>Обращаем Ваше внимание, что при наличии в поставке ягод меньшего калибра количество ягод в букетах и наборах будет увеличено для соблюдения итогового веса и размера композиции.</p>
              </div>
            </Space>
          </div>
        </Col>        
      </Row>
    </div>
  );
}

