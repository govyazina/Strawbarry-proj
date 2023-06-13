import mainTypes from './actionTypes';

export const doSomethingAC = (data) => ({
  type: mainTypes.DO_SOMETHING,
  payload: data,
});

export const submitFormAC = (submitFormData) => ({
  type: mainTypes.SUBMIT_FORM,
  payload: submitFormData,
});

// Кто первая напишет сюда еще одну функцию ...AC удали, пожалуйста, строку 3 с eslint-disable
