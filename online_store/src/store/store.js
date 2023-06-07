import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import mainReducer from './reducers/mainReducer';

const reducer = combineReducers({
  mainStore: mainReducer,
});

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({ reducer });
