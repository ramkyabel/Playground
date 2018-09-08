import * as CONSTANTS from './constants'

const initialState = { value: 0 };
export default function (state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.INCREMENT:
      return {...state,  value: state.value + 1}
    case CONSTANTS.DECREMENT:
      return {...state, value: state.value - 1}
    default:
      return state;
  }
}
