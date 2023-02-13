import { InitialStateType } from '../reducer'

export const removeFavourite = (state: InitialStateType, payload: string) => {
	const newState = Object.assign({}, state)
	newState.mails = newState.mails.map((mail) => {
		if (mail.id === payload) {
			return {
				...mail,
				favourite: false,
			}
		}
		return mail
	})
	sessionStorage.setItem('favMails', JSON.stringify(newState.mails))
	newState.filteredMails = newState.filteredMails.map((mail) => {
		if (mail.id === payload) {
			return {
				...mail,
				favourite: false,
			}
		}
		return mail
	})
	return newState
}
