import { REQ_ONE_RELOAD, REQ_ONE_RELOAD_SUCCESS, REQ_ONE_RELOAD_FAIL } from "../actions/actionTypes"

const initialState = {
    contact: null,
    isFetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQ_ONE_RELOAD:
            return {
                isFetching: true
            }
        case REQ_ONE_RELOAD_SUCCESS:
            return {
                contact: action.payload,
                isFetching: false
            }
        case REQ_ONE_RELOAD_FAIL:
            return {
                isFetching: false
            }
        default:
            return state
    }
}