import * as types from './types';

const initialState = {
	loading: true,
	ratesBase: 'USD',
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.SET_CODES:
			return { ...state, codes: [...payload] };
		case types.TOGGLE_LOADING:
			return {
				...state,
				loading: !state.loading,
				error: null,
			};
		case types.SET_RATES_BASE:
			return {
				...state,
				ratesBase: payload,
			};
		case types.SET_RATES:
			return {
				...state,
				rates: payload,
			};
		default:
			return state;
	}
};
