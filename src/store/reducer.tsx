import { InitialStateType, mailReducer } from '../reducer/mailReducer'
import { combineReducers } from 'redux'
import { Mail, mailBodyReducer } from '../reducer/mailBodyReducer'

export type AppState = {
	readMail: InitialStateType
	mailDetail: Mail
}
export const rootReducer = combineReducers({
	readMail: mailReducer,
	mailDetail: mailBodyReducer,
})
