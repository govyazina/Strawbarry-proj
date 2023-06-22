import React from 'react';
import { Card, Space } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useNavigate } from 'react-router-dom';
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
      cover={<img alt={product.name_title} src={product.photos[0]} height={400} />}
    >
      <Space
        className={styles.product_card}
      >
        <Meta
          title={product.name_title}
          description={product.description.ingredients}
        />
        <Meta title={`${product.price} €`} />
        <Space>
          <AddToCartBtn product={product} />
        </Space>
      </Space>
    </Card>
  );
}
