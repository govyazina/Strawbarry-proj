import mainTypes from '../actions/actionTypes';

const initialState = {
  something: {},
  productList: [],
};

function mainReducer(state = initialState, action = {}) {
  switch (action.type) {
    case mainTypes.DO_SOMETHING: {
      return { ...state, something: action.payload };
    }
    case mainTypes.WRITE_PRODUCT_LIST: {
      return { ...state, productList: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default mainReducer;
