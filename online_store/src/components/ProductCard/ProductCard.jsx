import React from 'react';
import { Button, Card, Space } from 'antd';
import Meta from 'antd/es/card/Meta';

export default function ProductCard({ product }) {
  return (
    <div>
      <Card
        hoverable
        bordered={false}
        style={{
          width: 300,
          height: 620,
        }}
        cover={<img alt={product.name_title} src={product.photos[0]} height={400} />}
      >
        <Space>
          <Meta title={product.name_title} description={product.description.ingredients} />
        </Space>
        <Space>
          <Button>Купить в 1 клик</Button>
          <Button type="primary">+ в корзину</Button>
        </Space>
      </Card>
    </div>
  );
}
