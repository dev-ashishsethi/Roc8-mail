import { Reducer } from 'react'
import { MailListing, markAsRead } from '../actions'
import { filterFavourite } from '../utils'
import { initialFetch } from '../utils'
import { markAsFavouriteUtil } from '../utils'
import { markAsReadUtil } from '../utils'
import { readFilter } from '../utils'
import { removeFavourite } from '../utils'
import { unreadFilter } from '../utils'

export type InitialEmail = {
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
	mails: InitialEmail[]
	filteredMails: InitialEmail[]
}
const mockMail = {
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
}

const initialState: InitialStateType = {
	mails: [mockMail],
	filteredMails: [mockMail],
}
export type ActionType = {
	type: MailListing.INITIAL_MAIL_LISTING
	payload: InitialEmail[]
}
type FilterActionType = {
	type:
		| MailListing.FILTER_UNREAD
		| MailListing.FILTER_READ
		| MailListing.FILTER_FAVOURITE
	payload: InitialEmail[]
}
type MarkActionType = {
	type: MailListing.MARK_AS_READ
	payload: string
}
type MarkFavouriteActionType = {
	type: MailListing.MARK_AS_FAVOURITE | MailListing.REMOVE_FAVOURITE
	payload: string
}
export const mailReducer: Reducer<
	InitialStateType,
	ActionType | FilterActionType | MarkActionType | MarkFavouriteActionType
> = (state = initialState, action) => {
	switch (action.type) {
		case MailListing.INITIAL_MAIL_LISTING:
			return initialFetch(state, action.payload)
		case MailListing.FILTER_UNREAD:
			return unreadFilter(state)
		case MailListing.FILTER_READ:
			return readFilter(state)
		case MailListing.MARK_AS_READ:
			return markAsReadUtil(state, action.payload)
		case MailListing.MARK_AS_FAVOURITE:
			return markAsFavouriteUtil(state, action.payload)
		case MailListing.FILTER_FAVOURITE:
			return filterFavourite(state)
		case MailListing.REMOVE_FAVOURITE:
			return removeFavourite(state, action.payload)
		default:
			return state
	}
}
