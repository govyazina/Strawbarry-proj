import React from 'react';
import { Col, Row } from 'antd';
import ProductCard from '../../components/ProductCard/ProductCard';
import useProductList from '../../hooks/useProductList';

export default function ProductList() {
  const productList = useProductList();
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
