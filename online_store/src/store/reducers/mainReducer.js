import mainTypes from '../actions/actionTypes';

const initialState = {
  something: {},
  form: {},
};

function mainReducer(state = initialState, action = {}) {
  switch (action.type) {
    case mainTypes.DO_SOMETHING: {
      return { ...state, something: action.payload };
    }
    // case mainTypes.SUBMIT_FORM: {
    //   const cartForm = action.payload;
    //   return { ...state, form: cartForm };
    // }
    default: {
      return state;
    }
  }
}

export default mainReducer;
