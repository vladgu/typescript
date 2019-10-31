import { combineReducers } from "redux";
import { RouterState, connectRouter } from "connected-react-router";
import { reducer as formReducer, FormStateMap } from "redux-form";
import loginReducer, { State as LoginState } from "./loginLogout";
import contactsReducer, { State as ContactsState } from "./contacts";
import contactGit, { State as ContactGitState } from "./contactGit";

export type RootState = {
  router: RouterState;
  loginReducer: LoginState;
  contactsReducer: ContactsState;
  contactGit: ContactGitState;
  form: FormStateMap;
};

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    loginReducer,
    contactsReducer,
    contactGit,
    form: formReducer
  });
export default createRootReducer;
