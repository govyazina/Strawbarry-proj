import React from 'react';
import { Select, Slider } from 'antd';
import { useDispatch } from 'react-redux';
import useProductList from '../../hooks/useProductList';
import { setFilterAC } from '../../store/actions/mainActions';

export default function ProductFilter() {
  const productsList = useProductList();
  const maximumPrice = Math.max(...productsList.map((item) => item.price));
  const dispatch = useDispatch();
  const sizeOptions = [
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
  const typeOptions = [
    {
      label: 'Букеты',
      value: 'bouquet',
    },
    {
      label: 'Коробки',
      value: 'box',
    },
    {
      label: 'Корзины',
      value: 'basket',
    },
  ];
  const handlePriceChange = ([minPrice, maxPrice]) => {
    dispatch(setFilterAC({ minPrice, maxPrice }));
  };
  const handleSizeChange = (value) => {
    dispatch(setFilterAC({ size: value }));
  };
  const handleTypeChange = (value) => {
    dispatch(setFilterAC({ type: value }));
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
        onChange={handleSizeChange}
        options={sizeOptions}
      />
      <h5>тип:</h5>
      <Select
        mode="multiple"
        allowClear
        style={{
          width: '100%',
        }}
        placeholder="Please select"
        onChange={handleTypeChange}
        options={typeOptions}
      />
    </div>
  );
}
