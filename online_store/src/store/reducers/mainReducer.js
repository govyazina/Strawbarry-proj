import mainTypes from '../actions/actionTypes';

const initialState = {
  something: {},
};

function mainReducer(action, state = initialState) {
  switch (action.type) {
    case mainTypes.DO_SOMETHING: {
      return { ...state, something: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default mainReducer;
