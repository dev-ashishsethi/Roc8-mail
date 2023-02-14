import { Reducer } from 'react'
import { MailListing } from '../actions'

export type Mail = {
	id: string
	body: string
}

const mailInitialBody = {
	id: '0',
	body: '',
}
type MailActionType = {
	type: MailListing.MAIL_BODY
	payload: Mail
}
export const mailBodyReducer: Reducer<Mail, MailActionType> = (
	state = mailInitialBody,
	action,
) => {
	switch (action.type) {
		case MailListing.MAIL_BODY:
			return (state = action.payload)

		default:
			return state
	}
}
