import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductListThunk } from '../store/actions/mainActions';

const useProductList = () => {
  const { productListRequested, productList } = useSelector((store) => store.mainStore);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!productListRequested) {
      dispatch(
        getProductListThunk(),
      );
    }
  }, []);
  return productList;
};

export default useProductList;
