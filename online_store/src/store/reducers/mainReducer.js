import mainTypes from '../actions/actionTypes';

const initialState = {
  cart: [],
  productList: [],
  productListRequested: false,
};

function mainReducer(state = initialState, action = {}) {
  switch (action.type) {
    case mainTypes.DO_SOMETHING: {
      return { ...state, something: action.payload };
    }
    case mainTypes.WRITE_PRODUCT_LIST: {
      return { ...state, productList: action.payload };
    }
    case mainTypes.PRODUCT_LIST_REQUESTED: {
      return { ...state, productListRequested: action.payload };
    }
    case mainTypes.ADD_TO_CART: {
      return { ...state, cart: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default mainReducer;
