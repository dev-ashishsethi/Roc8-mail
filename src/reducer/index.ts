import { Reducer } from 'react';
import { FetchInit } from '../actions';

export type initialEmail = {
	id: number;
	read: boolean;
	unread: boolean;
	favourite: boolean;
	emailFrom: {
		email: string;
		name: string;
	};
	date: number;
	subject: string;
	short_description: string;
};
const inittialState: initialEmail[] = [
	{
		id: 0,
		read: false,
		unread: true,
		favourite: false,
		emailFrom: {
			email: '',
			name: '',
		},
		date: 0,
		subject: '',
		short_description: '',
	},
];
type ActionType = {
	type: FetchInit.FETCH_INIT;
	payload: initialEmail[];
};
export const mailReducer: Reducer<initialEmail[], ActionType> = (
	state = inittialState,
	action
) => {
	switch (action.type) {
		case FetchInit.FETCH_INIT:
			return (state = action.payload);

		default:
			return state;
	}
};
