import { combineReducers } from 'redux'
import loginReducer from './loginLogout'
import contactsReducer from './contacts'
import contactGit from './contactGit'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({ loginReducer, contactsReducer, contactGit, form: formReducer })