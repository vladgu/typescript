import { call, put, takeLatest } from 'redux-saga/effects'

import { INITIATE_LOGIN } from '../actions/actionTypes'
import { axios } from '../utils/axiosConfig'
import { fbLogin, fbLoginSuccess, fbLoginFail } from '../actions'

function handle() {
    return axios.get('/?ext')
}

function* loginSaga() {
    yield put(fbLogin())
    try {
        const response = yield call(handle)
        yield localStorage.setItem('userKey', JSON.stringify(response.data))
        yield put(fbLoginSuccess(response.data))
    } catch (error) {
        yield put(fbLoginFail(error))
    }
}

export default function* loginSagaAll() {
    yield takeLatest(INITIATE_LOGIN, loginSaga)
}