import axios from 'axios';
import { AnyAction, Dispatch } from 'redux';

export enum FetchInit {
	FETCH_INIT = 'FETCH_INIT',
}

export const fetchInit = () => (dispatch: Dispatch<AnyAction>) => {
	axios
		.get('https://flipkart-email-mock.now.sh/')
		.then((res) =>
			dispatch({ type: FetchInit.FETCH_INIT, payload: res.data.list })
		);
};
