import mainTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const doSomethingAC = (data) => ({
  type: mainTypes.DO_SOMETHING,
  payload: data,
});

// Кто первая напишет сюда еще одну функцию ...AC удали, пожалуйста, строку 3 с eslint-disable
