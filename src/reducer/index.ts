import { Reducer } from 'react'
import { Fetch } from '../actions'

export type initialEmail = {
	id: string
	read: boolean
	unread: boolean
	favourite: boolean
	from: {
		email: string
		name: string
	}
	date: Date
	subject: string
	short_description: string
}
export type InitialStateType = {
	mails: initialEmail[]
	filteredMails: initialEmail[]
}
const inittialState: InitialStateType = {
	mails: [
		{
			id: '0',
			read: false,
			unread: true,
			favourite: false,
			from: {
				email: '',
				name: '',
			},
			date: new Date(),
			subject: '',
			short_description: '',
		},
	],
	filteredMails: [
		{
			id: '0',
			read: false,
			unread: true,
			favourite: false,
			from: {
				email: '',
				name: '',
			},
			date: new Date(),
			subject: '',
			short_description: '',
		},
	],
}
type ActionType = {
	type: Fetch.FETCH_INIT
	payload: initialEmail[]
}
type FilterActionType = {
	type: Fetch.FILTER_UNREAD | Fetch.FILTER_READ | Fetch.FILTER_FAVOURITE
	payload: initialEmail[]
}
type MarkActionType = {
	type: Fetch.MARK_AS_READ
	payload: string
}
type MarkFavouriteActionType = {
	type: Fetch.MARK_AS_FAVOURITE
	payload: string
}
export const mailReducer: Reducer<
	InitialStateType,
	ActionType | FilterActionType | MarkActionType | MarkFavouriteActionType
> = (state = inittialState, action) => {
	switch (action.type) {
		case Fetch.FETCH_INIT: {
			const newState = Object.assign({}, state)
			newState.mails = action.payload.map((data) => ({
				...data,
				read: false,
				unread: true,
				favourite: false,
			}))
			newState.filteredMails = newState.mails
			return newState
		}

		case Fetch.FILTER_UNREAD: {
			const newState = Object.assign({}, state)
			newState.filteredMails = newState.mails.filter(
				(mail) =>
					mail.unread === true &&
					mail.read === false &&
					mail.favourite === false,
			)
			return newState
		}
		case Fetch.FILTER_READ: {
			const newState = Object.assign({}, state)
			newState.filteredMails = newState.mails.filter(
				(mail) => mail.unread === false && mail.read === true,
			)
			return newState
		}
		case Fetch.MARK_AS_READ: {
			const newState = Object.assign({}, state)
			newState.mails = newState.mails.map((mail) => {
				if (mail.id == action.payload) {
					return {
						...mail,
						read: true,
						unread: false,
						favourite: false,
					}
				}
				return mail
			})
			newState.filteredMails = newState.filteredMails.map((mail) => {
				if (mail.id == action.payload) {
					return {
						...mail,
						read: true,
						unread: false,
						favourite: false,
					}
				}
				return mail
			})
			return newState
		}

		case Fetch.MARK_AS_FAVOURITE: {
			const newState = Object.assign({}, state)
			newState.mails = newState.mails.map((mail) => {
				if (mail.id === action.payload) {
					return {
						...mail,
						read: true,
						favourite: true,
						unread: false,
					}
				}
				return mail
			})

			newState.filteredMails = newState.filteredMails.map((mail) => {
				if (mail.id === action.payload) {
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
		case Fetch.FILTER_FAVOURITE: {
			const newState = Object.assign({}, state)
			newState.filteredMails = newState.mails.filter(
				(mail) => mail.favourite === true,
			)
			return newState
		}
		default:
			return state
	}
}
