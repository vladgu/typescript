import {
  REQ_CONT,
  REQ_CONT_SUCCESS,
  REQ_CONT_FAIL
} from "../actions/actionTypes";

export type State = {
  contactsList: any;
  isFetching: boolean;
};

const initialState = {
  contactsList: [],
  isFetching: false
};

export default (state = initialState, action: any): State => {
  switch (action.type) {
    case REQ_CONT:
      return {
        ...state,
        isFetching: true
      };
    case REQ_CONT_SUCCESS:
      return {
        contactsList: action.payload,
        isFetching: false
      };
    case REQ_CONT_FAIL:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};
