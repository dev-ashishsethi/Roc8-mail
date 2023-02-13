import { InitialStateType } from '../reducer'

export const markAsReadUtil = (state: InitialStateType, payload: string) => {
	const newState = Object.assign({}, state)
	newState.mails = newState.mails.map((mail) => {
		if (mail.id == payload) {
			return {
				...mail,
				read: true,
				unread: false,
			}
		}
		return mail
	})
	sessionStorage.setItem('readMails', JSON.stringify(newState.mails))
	newState.filteredMails = newState.filteredMails.map((mail) => {
		if (mail.id == payload) {
			return {
				...mail,
				read: true,
				unread: false,
			}
		}
		return mail
	})
	return newState
}
