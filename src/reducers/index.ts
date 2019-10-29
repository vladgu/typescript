import { combineReducers } from "redux";
import { reducer as formReducer, FormStateMap } from "redux-form";
import loginReducer, { State as LoginState } from "./loginLogout";
import contactsReducer, { State as ContactsState } from "./contacts";
import contactGit, { State as ContactGitState } from "./contactGit";

export type RootState = {
  loginReducer: LoginState;
  contactsReducer: ContactsState;
  contactGit: ContactGitState;
  form: FormStateMap;
};

export default combineReducers<RootState>({
  loginReducer,
  contactsReducer,
  contactGit,
  form: formReducer
});
