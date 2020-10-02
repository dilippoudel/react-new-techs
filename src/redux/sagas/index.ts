import { all, select, takeLatest } from 'redux-saga/effects'

function* saveStateToLocalStorage() {
  const state = yield select()
  yield localStorage.setItem('save-data', JSON.stringify(state))
}
export default function* rootSaga() {
  yield all([takeLatest('*', saveStateToLocalStorage)])
}
