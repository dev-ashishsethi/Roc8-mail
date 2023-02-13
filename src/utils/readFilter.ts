import { initialEmail, InitialStateType } from '../reducer'

export const readFilter = (state: InitialStateType) => {
	const newState = Object.assign({}, state)

	newState.filteredMails = JSON.parse(
		sessionStorage.getItem('readMails')!,
	).filter((mail: initialEmail) => mail.unread === false && mail.read === true)
	return newState
}
