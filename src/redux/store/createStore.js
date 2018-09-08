import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga'
import rootReducer from '../reducer'
// import { routerMiddleware, history } from '../../components/App';
import { autoRehydrate, persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true
});

// const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware ();

const middleWares = [logger,sagaMiddleware];

export const store = {
   ...createStore(
    rootReducer,
    undefined,
    compose (
      applyMiddleware(...middleWares),
      autoRehydrate(),
    )
  ),
  runSaga: sagaMiddleware.run
}

persistStore(store);
store.runSaga(rootSaga);

// if(typeof window !== undefined && window.document) {
//   console.log('im client')
//   history.listen((location, action) => {
//     history.push('#')
//   })
// }

export default store;
