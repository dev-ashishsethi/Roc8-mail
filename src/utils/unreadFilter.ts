import { InitialStateType } from '../reducer'

export const unreadFilter = (state: InitialStateType) => {
	const newState = Object.assign({}, state)
	newState.filteredMails = newState.mails.filter(
		(mail) =>
			mail.unread === true && mail.read === false && mail.favourite === false,
	)

	return newState
}
