import { REQ_CONT, REQ_CONT_SUCCESS, REQ_CONT_FAIL } from "../actions/actionTypes"

const initialState = {
    contactsList: [],
    isFetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQ_CONT:
            return {
                isFetching: true
            }
        case REQ_CONT_SUCCESS:
            return {
                contactsList: action.payload,
                isFetching: false
            }
        case REQ_CONT_FAIL:
            return {
                isFetching: false
            }
        default:
            return state
    }
}