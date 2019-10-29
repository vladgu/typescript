import { INITIATE_LOGOUT, INITIATE_LOGIN, FB_LOGIN, FB_LOGIN_SUCCESS, FB_LOGIN_FAIL, AUTH_FROM_LS, INITIATE_GETTING_CONTACTS, REQ_CONT, REQ_CONT_SUCCESS, REQ_CONT_FAIL, INITIATE_GETTING_ONE_CONTACTS, REQ_ONE_RELOAD, REQ_ONE_RELOAD_SUCCESS, REQ_ONE_RELOAD_FAIL } from './actionTypes'

// LOGOUT

export function logout() {
    return {
        type: INITIATE_LOGOUT
    }
}

// LOGIN

export function facebookLogin() {
    return {
        type: INITIATE_LOGIN
    }
}

export function fbLogin() {
    return {
        type: FB_LOGIN
    }
}

export function fbLoginSuccess(payload) {
    return {
        type: FB_LOGIN_SUCCESS,
        payload
    }
}

export function fbLoginFail(payload) {
    return {
        type: FB_LOGIN_FAIL,
        payload
    }
}

// AUTH FROM LOCALSTORAGE

export function autnFromLs(payload) {
    return {
        type: AUTH_FROM_LS,
        payload
    }
}

// GETTING CONTACTS LIST

export function getContacts() {
    return {
        type: INITIATE_GETTING_CONTACTS
    }
}

export function requestContacts() {
    return {
        type: REQ_CONT
    }
}

export function requestContactsSuccess(payload) {
    return {
        type: REQ_CONT_SUCCESS,
        payload
    }
}

export function requestContactsFail(payload) {
    return {
        type: REQ_CONT_FAIL,
        payload
    }
}

// GETTING CONTACT FROM GIT

export function getContact(payload) {
    return {
        type: INITIATE_GETTING_ONE_CONTACTS,
        payload
    }
}

export function requestContact() {
    return {
        type: REQ_ONE_RELOAD
    }
}

export function requestContactSuccess(payload) {
    return {
        type: REQ_ONE_RELOAD_SUCCESS,
        payload
    }
}

export function requestContactFail(payload) {
    return {
        type: REQ_ONE_RELOAD_FAIL,
        payload
    }
}