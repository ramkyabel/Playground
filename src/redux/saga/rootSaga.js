import counterSaga from '../../components/Counter/sagas';
import { put, fork } from 'redux-saga/effects'
export default function* rootSaga (){
  yield [
    fork(mainSaga),
    fork(counterSaga)
  ]
};

function* mainSaga() {
  yield put({type:'APP_SAGA_STARTED'})
  yield put({type:'APP_SAGA_FINISHED'})
}
