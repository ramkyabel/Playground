import counterReducer from '../../components/Counter/reducer'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { REHYDRATE } from 'redux-persist/constants'

const initialState = {
  sagaLoading: false,
  sagaLoaded: false
}

const appReducer = (state = initialState, action) => {
  switch(action.type){
    case 'APP_SAGA_STARTED':
      return {
        ...state,
        sagaLoading: true,
        sagaLoaded: false
      }
    case 'APP_SAGA_FINISHED':
      return {
        ...state,
        sagaLoading: false,
        sagaLoaded: true
      }
    default:
      return state;
  }
}

const modulesReducers = {
  counterReducer
}

export const rootReducer = combineReducers({
  appReducer,
  ...modulesReducers,
  routing: routerReducer
})

export default rootReducer;
