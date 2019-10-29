import { put, takeLatest } from "redux-saga/effects";

import { INITIATE_LOGOUT, LOGOUT } from "../actions/actionTypes";

function* logoutSaga() {
  yield localStorage.clear();
  yield put({
    type: LOGOUT
  });
}

export default function* logoutSagaAll() {
  yield takeLatest(INITIATE_LOGOUT, logoutSaga);
}
