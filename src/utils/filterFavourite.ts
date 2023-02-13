import { initialEmail, InitialStateType } from '../reducer'

export const filterFavourite = (state: InitialStateType) => {
	const newState = Object.assign({}, state)

	newState.filteredMails = JSON.parse(
		sessionStorage.getItem('favMails')!,
	).filter((mail: initialEmail) => mail.favourite === true)
	return newState
}
