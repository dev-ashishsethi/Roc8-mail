import { InitialEmail, InitialStateType } from '../reducer/mailReducer'

export const filterFavourite = (state: InitialStateType) => {
	const newState = Object.assign({}, state)

	newState.filteredMails = JSON.parse(
		sessionStorage.getItem('favMails')!,
	).filter((mail: InitialEmail) => mail.favourite === true)
	return newState
}

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

export const markAsFavouriteUtil = (
	state: InitialStateType,
	payload: string,
) => {
	const newState = Object.assign({}, state)
	newState.mails = newState.mails.map((mail) => {
		if (mail.id === payload) {
			return {
				...mail,
				read: true,
				favourite: true,
				unread: false,
			}
		}
		return mail
	})
	sessionStorage.setItem('favMails', JSON.stringify(newState.mails))
	newState.filteredMails = newState.filteredMails.map((mail) => {
		if (mail.id === payload) {
			return {
				...mail,
				read: true,
				favourite: true,
				unread: false,
			}
		}
		return mail
	})
	return newState
}

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

export const unreadFilter = (state: InitialStateType) => {
	const newState = Object.assign({}, state)
	newState.filteredMails = newState.mails.filter(
		(mail) =>
			mail.unread === true && mail.read === false && mail.favourite === false,
	)

	return newState
}

export const readFilter = (state: InitialStateType) => {
	const newState = Object.assign({}, state)

	newState.filteredMails = JSON.parse(
		sessionStorage.getItem('readMails')!,
	).filter((mail: InitialEmail) => mail.unread === false && mail.read === true)
	return newState
}

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
