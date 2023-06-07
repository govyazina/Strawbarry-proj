import {mainTypes} from './actionTypes'

export const doSomethingAC = (data) => ({
    type: mainTypes.DO_SOMETHING,
    payload: data,
});