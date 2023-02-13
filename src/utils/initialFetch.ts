import { initialEmail, InitialStateType } from '../reducer'

export const initialFetch = (
	state: InitialStateType,
	payload: initialEmail[],
) => {
	const newState = Object.assign({}, state)
	newState.mails = payload.map((data) => ({
		...data,
		read: false,
		unread: true,
		favourite: false,
	}))

	newState.filteredMails = newState.mails
	return newState
}
