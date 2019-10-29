import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { axiosGit } from "../utils/axiosConfig";
import { INITIATE_GETTING_ONE_CONTACTS } from "../actions/actionTypes";
import {
  requestContact,
  requestContactSuccess,
  requestContactFail
} from "../actions";

function handle(payload: any) {
  return axiosGit.get(payload);
}

function* getContactSaga(action: any) {
  yield put(requestContact());
  try {
    const response = yield call(handle, action.payload);
    yield put(requestContactSuccess(response.data));
  } catch (e) {
    yield put(requestContactFail(e));
  }
}

export default function* getContactSagaAll() {
  yield takeLatest(INITIATE_GETTING_ONE_CONTACTS, getContactSaga);
}
