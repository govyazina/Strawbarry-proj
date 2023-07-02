import React from 'react';
import { Select, Slider } from 'antd';
import { useDispatch } from 'react-redux';
import useProductList from '../../hooks/useProductList';
import { setFilterAC } from '../../store/actions/mainActions';

export default function ProductFilter() {
  const productsList = useProductList();
  const maximumPrice = Math.max(...productsList.map((item) => item.price));
  const dispatch = useDispatch();
  const options = [
    {
      label: 'S',
      value: 'S',
    },
    {
      label: 'M',
      value: 'M',
    },
    {
      label: 'L',
      value: 'L',
    },
  ];
  const handlePriceChange = ([minPrice, maxPrice]) => {
    dispatch(setFilterAC({ minPrice, maxPrice }));
  };
  const handleChange = (value) => {
    dispatch(setFilterAC({ size: value }));
  };
  return (
    <div>
      <h5>цена:</h5>
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
      <h5>размер:</h5>
      <Select
        mode="multiple"
        allowClear
        style={{
          width: '100%',
        }}
        placeholder="Please select"
        onChange={handleChange}
        options={options}
      />
    </div>
  );
}
