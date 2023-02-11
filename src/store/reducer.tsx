import { mailReducer } from '../reducer';
import { combineReducers } from 'redux';
export const rootReducer = combineReducers({
	readMail: mailReducer,
});
