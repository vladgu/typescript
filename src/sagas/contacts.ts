import { takeLatest } from "redux-saga";
import { call, put } from "redux-saga/effects";

import { axiosGit } from "../utils/axiosConfig";
import { INITIATE_GETTING_CONTACTS } from "../actions/actionTypes";
import {
  requestContacts,
  requestContactsSuccess,
  requestContactsFail
} from "../actions";

function handle() {
  return axiosGit.get("");
}

function* getContactsSaga() {
  yield put(requestContacts());
  try {
    const response = yield call(handle);
    yield put(requestContactsSuccess(response.data));
  } catch (e) {
    yield put(requestContactsFail(e));
  }
}

export default function* getContactsSagaAll() {
  yield takeLatest(INITIATE_GETTING_CONTACTS, getContactsSaga);
}
