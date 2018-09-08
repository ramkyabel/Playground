import * as CONSTANTS from './constants'

export const valueSelector = (state) => {
  return state[CONSTANTS.reducerKey].value;
}
