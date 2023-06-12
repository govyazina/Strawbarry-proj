import React from 'react';
import { Button, Card, Space } from 'antd';
import Meta from 'antd/es/card/Meta';
import styles from './productcard.module.scss';

export default function ProductCard({ product }) {
  return (
    <Card
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
          <Button>Купить в 1 клик</Button>
          <Button type="primary">+ в корзину</Button>
        </Space>
      </Space>
    </Card>
  );
}
