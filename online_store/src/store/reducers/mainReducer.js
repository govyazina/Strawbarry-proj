import { mainTypes } from "../actions/actionTypes";

const initialState = {
    // something: {},
  };

export function mainReducer(state = initialState, action) {
    switch (action.type) {
      // case mainTypes.DO_SOMETHING: {
      //   return {...state, something: action.payload};
      // }
      default: {
        return state;
      }
    }
  }
  