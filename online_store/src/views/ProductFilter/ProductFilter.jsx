import React from 'react';
import { Slider } from 'antd';
import { useDispatch } from 'react-redux';
import useProductList from '../../hooks/useProductList';
import { setFilterAC } from '../../store/actions/mainActions';

export default function ProductFilter() {
  const productsList = useProductList();
  const maximumPrice = Math.max(...productsList.map((item) => item.price));
  const dispatch = useDispatch();
  const handlePriceChange = ([minPrice, maxPrice]) => {
    dispatch(setFilterAC({ minPrice, maxPrice }));
  };
  return (
    <div>
      {maximumPrice > 0
                && (
                <Slider
                  range
                  tooltip={{
                    open: true,
                  }}
                  min={0}
                  max={maximumPrice}
                  defaultValue={[0, maximumPrice]}
                  onAfterChange={handlePriceChange}
                />
                )}
    </div>
  );
}
