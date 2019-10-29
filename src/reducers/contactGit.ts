import {
  REQ_ONE_RELOAD,
  REQ_ONE_RELOAD_SUCCESS,
  REQ_ONE_RELOAD_FAIL
} from "../actions/actionTypes";

export type State = {
  contact: any;
  isFetching: boolean;
};

const initialState = {
  contact: null,
  isFetching: false
};

export default (state = initialState, action: any): State => {
  switch (action.type) {
    case REQ_ONE_RELOAD:
      return {
        ...state,
        isFetching: true
      };
    case REQ_ONE_RELOAD_SUCCESS:
      return {
        contact: action.payload,
        isFetching: false
      };
    case REQ_ONE_RELOAD_FAIL:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};
