import { InitialStateType, mailReducer } from '../reducer'
import { combineReducers } from 'redux'
import { MailBody, mailBodyReducer } from '../reducer/mailBodyReducer'

export type AppState = {
	readMail: InitialStateType
	mailDetail: MailBody
}
export const rootReducer = combineReducers({
	readMail: mailReducer,
	mailDetail: mailBodyReducer,
})
