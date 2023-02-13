import axios from 'axios'
import { AnyAction, Dispatch } from 'redux'

export enum Fetch {
	FETCH_INIT = 'FETCH_INIT',
	FILTER_UNREAD = 'FILTER_UNREAD',
	FILTER_READ = 'FILTER_READ',
	MARK_AS_READ = 'MARK_AS_READ',
	MAIL_BODY = 'MAIL_BODY',
	MARK_AS_FAVOURITE = 'MARK_AS_FAVOURITE',
	FILTER_FAVOURITE = 'FILTER_FAVOURITE',
	REMOVE_FAVOURITE = 'REMOVE_FAVOURITE',
}

export const fetchInit =
	(pagenumber: number) => (dispatch: Dispatch<AnyAction>) => {
		axios
			.get(`https://flipkart-email-mock.now.sh/?page=${pagenumber}`)
			.then((res) => {
				dispatch({ type: Fetch.FETCH_INIT, payload: res.data.list })
			})
	}

export const unreadMail = () => (dispatch: Dispatch<AnyAction>) => {
	return dispatch({ type: Fetch.FILTER_UNREAD })
}
export const readMailFilter = () => (dispatch: Dispatch<AnyAction>) => {
	return dispatch({ type: Fetch.FILTER_READ })
}

export const markAsRead = (id: string) => (dispatch: Dispatch<AnyAction>) => {
	return dispatch({ type: Fetch.MARK_AS_READ, payload: id })
}

export const openMail = (id: string) => (dispatch: Dispatch<AnyAction>) => {
	axios
		.get(`https://flipkart-email-mock.now.sh/?id=${id}`)
		.then((res) => dispatch({ type: Fetch.MAIL_BODY, payload: res.data }))
}
export const favouriteFilter = () => (dispatch: Dispatch<AnyAction>) => {
	return dispatch({ type: Fetch.FILTER_FAVOURITE })
}
export const markAsFavourite =
	(id: string) => (dispatch: Dispatch<AnyAction>) => {
		return dispatch({ type: Fetch.MARK_AS_FAVOURITE, payload: id })
	}
export const removeFromFavourite =
	(id: string) => (dispatch: Dispatch<AnyAction>) => {
		return dispatch({ type: Fetch.REMOVE_FAVOURITE, payload: id })
	}
