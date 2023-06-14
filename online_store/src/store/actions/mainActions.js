import mainTypes from './actionTypes';

export const doSomethingAC = (data) => ({
  type: mainTypes.DO_SOMETHING,
  payload: data,
});

export const sendOrderThunkAC = (submitFormData) => ({
  type: mainTypes.SUBMIT_FORM,
  payload: submitFormData,
});

// Кто первая напишет сюда еще одну функцию ...AC удали, пожалуйста, строку 3 с eslint-disable

// export const getCharacterThunk = () => (dispatch) => {
//   fetch(`https://strawberry.nmsc.pchapl.dev/order`)
//     .then((data) => data.json())
//     .then((result) => dispatch(sendOrderThunkAC(result)));
// };

// export const getProductListThunk = () => (dispatch) => {
//   fetch('https://strawberry.nmsc.pchapl.dev/product')
//     .then((data) => data.json())
//     .then((result) => {
//       dispatch(
//         writeProductListAC(result),
//       );
//     });
//   dispatch(
//     productListRequestedAC(),
//   );
// }
