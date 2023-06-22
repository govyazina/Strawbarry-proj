import React from 'react';
import { Card, Space } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useNavigate } from 'react-router-dom';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import styles from './productcard.module.scss';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const id = product.sku;
  const clickHandler = () => navigate(`/bouquet/${id}`);
  return (
    <Card
      onClick={clickHandler}
      hoverable
      bordered={false}
      style={{
        width: 300,
        height: 620,
        textAlign: 'center',
      }}
      cover={<img alt={product.name_title} src={product.photos[0]} height={350} />}
    >
      <Space
        className={styles.product_card}
      >
        <Title
          level={5}
          className={styles.product_card__title}
        >
          {product.name_title}
        </Title>
        <Text
          type="secondary"
        >
          {product.description.ingredients}
        </Text>
        <div>
          <Meta title={`${product.price} €`} />
          <Space
            style={{
              marginTop: '1rem',
            }}
          >
            <AddToCartBtn product={product} />
          </Space>
        </div>
      </Space>
    </Card>
  );
}
