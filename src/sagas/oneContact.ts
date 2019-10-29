import { call, put, takeLatest } from 'redux-saga/effects'

import { axiosGit } from '../utils/axiosConfig'
import { INITIATE_GETTING_ONE_CONTACTS } from '../actions/actionTypes'
import { requestContact, requestContactSuccess, requestContactFail } from '../actions'

function handle(payload) {
    return axiosGit.get(payload)
}

function* getContactSaga(action) {
    yield put(requestContact())
    try {
        const response = yield call(handle, action.payload)
        yield put(requestContactSuccess(response.data))
    } catch (e) {
        yield put(requestContactFail(e))
    }
}

export default function* getContactSagaAll() {
    yield takeLatest(INITIATE_GETTING_ONE_CONTACTS, getContactSaga)
}