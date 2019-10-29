import {
  LOGOUT,
  FB_LOGIN,
  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAIL,
  AUTH_FROM_LS
} from "../actions/actionTypes";

export type State = {
  logged: any;
  userInfo: any;
  isFetching: boolean;
};

const initialState = {
  logged: localStorage.getItem("userKey") ? true : false,
  userInfo: null,
  isFetching: false
};

export default (state = initialState, action: any): State => {
  switch (action.type) {
    case LOGOUT:
      return {
        logged: false,
        userInfo: {},
        isFetching: false
      };
    case AUTH_FROM_LS:
      return {
        logged: true,
        userInfo: action.payload,
        isFetching: false
      };
    case FB_LOGIN:
      return {
        ...state,
        isFetching: true
      };
    case FB_LOGIN_SUCCESS:
      return {
        logged: true,
        userInfo: action.payload,
        isFetching: false
      };
    case FB_LOGIN_FAIL:
      return {
        logged: false,
        userInfo: null,
        isFetching: false
      };
    default:
      return state;
  }
};
