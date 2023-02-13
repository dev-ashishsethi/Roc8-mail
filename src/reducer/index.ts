import { Reducer } from 'react'
import { Fetch, markAsRead } from '../actions'
import { filterFavourite } from '../utils/filterFavourite'
import { initialFetch } from '../utils/initialFetch'
import { markAsFavouriteUtil } from '../utils/markAsFavouriteUtil'
import { markAsReadUtil } from '../utils/markAsRead'
import { readFilter } from '../utils/readFilter'
import { removeFavourite } from '../utils/removeFavourite'
import { unreadFilter } from '../utils/unreadFilter'

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
export type ActionType = {
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
	type: Fetch.MARK_AS_FAVOURITE | Fetch.REMOVE_FAVOURITE
	payload: string
}
export const mailReducer: Reducer<
	InitialStateType,
	ActionType | FilterActionType | MarkActionType | MarkFavouriteActionType
> = (state = inittialState, action) => {
	switch (action.type) {
		case Fetch.FETCH_INIT:
			return initialFetch(state, action.payload)
		case Fetch.FILTER_UNREAD:
			return unreadFilter(state)
		case Fetch.FILTER_READ:
			return readFilter(state)
		case Fetch.MARK_AS_READ:
			return markAsReadUtil(state, action.payload)
		case Fetch.MARK_AS_FAVOURITE:
			return markAsFavouriteUtil(state, action.payload)
		case Fetch.FILTER_FAVOURITE:
			return filterFavourite(state)
		case Fetch.REMOVE_FAVOURITE:
			return removeFavourite(state, action.payload)
		default:
			return state
	}
}
