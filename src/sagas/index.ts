import { all, fork } from 'redux-saga/effects'
import logoutSagaAll from './logout'
import loginSagaAll from './login'
import getContactsSagaAll from './contacts'
import getContactSagaAll from './oneContact'

export default function* sagas() {
    yield all([fork(getContactsSagaAll), fork(loginSagaAll), fork(getContactSagaAll), fork(logoutSagaAll)])
}