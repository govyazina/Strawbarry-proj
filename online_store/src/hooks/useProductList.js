import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductListThunk } from '../store/actions/mainActions';

const useProductList = (id) => {
  const { productListRequested, productList } = useSelector((store) => store.mainStore);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!productListRequested) {
      dispatch(
        getProductListThunk(),
      );
    }
  }, []);
  return id ? productList.find((product) => product.sku === +id) : productList;
};

export default useProductList;
