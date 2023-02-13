import { Reducer } from 'react'
import { Fetch } from '../actions'

export type MailBody = {
	id: string
	body: string
}

const mailInitialBody = {
	id: '0',
	body: '',
}
type MailActionType = {
	type: Fetch.MAIL_BODY
	payload: MailBody
}
export const mailBodyReducer: Reducer<MailBody, MailActionType> = (
	state = mailInitialBody,
	action,
) => {
	switch (action.type) {
		case Fetch.MAIL_BODY:
			return (state = action.payload)

		default:
			return state
	}
}
