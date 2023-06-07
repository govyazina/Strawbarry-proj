import mainTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const doSomethingAC = (data) => ({
  type: mainTypes.DO_SOMETHING,
  payload: data,
});
