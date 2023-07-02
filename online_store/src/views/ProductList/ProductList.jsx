import React from 'react';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import useProductList from '../../hooks/useProductList';

export default function ProductList() {
  const productList = useProductList();
  const { filters: { minPrice, maxPrice } } = useSelector((store) => store.mainStore);
  const filter = (product) => {
    if (product.price >= minPrice && product.price <= maxPrice) {
      return true;
    }
    return false;
  };
  return (
    <Row gutter={[16, 16]}>
      {
                productList.filter(filter).map((product) => (
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
