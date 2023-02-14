import { InitialEmail, InitialStateType } from '../reducer'

export const initialFetch = (
	state: InitialStateType,
	payload: InitialEmail[],
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
