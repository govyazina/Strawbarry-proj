import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'antd';
import ProductCard from '../../components/ProductCard/ProductCard';

export default function ProductList() {
  const { productList } = useSelector((store) => store.mainStore);
  return (
    <Row gutter={[16, 16]}>
      {
                productList.map((product) => (
                  <Col
                    key={product.sku}
                    xs={24}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={6}
                  >
                    <ProductCard
                      product={product}
                    />
                  </Col>

                ))
            }
    </Row>
  );
}
