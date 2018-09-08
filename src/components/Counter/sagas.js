import { delay } from 'redux-saga';
import { call, select, put, takeEvery, all } from 'redux-saga/effects'
import * as CONSTANTS from './constants'
import * as ACTIONS from './actions'

export function* incrementAsync(
  { delayFn = delay } = {}
) {
  try {
      yield call(delayFn,1000)
      yield put(ACTIONS.onIncrement())
  } catch (err) {
    console.log(err)
  }
}

export function* watchIncrementAsync() {
  yield takeEvery(CONSTANTS.INCREMENT_ASYNC, incrementAsync, [delay])
}

export default function* counterSaga() {
  yield all([
    watchIncrementAsync(),
  ])
}
