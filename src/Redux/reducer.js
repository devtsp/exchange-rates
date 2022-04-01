import * as types from './types';

const initialState = {
	loading: true,
	ratesBase: 'USD',
	conversionOrigin: 'USD',
	conversionTarget: 'ARS',
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.SET_CODES:
			return { ...state, codes: [...payload] };
		case types.TOGGLE_LOADING:
			return {
				...state,
				loading: !state.loading,
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
		case types.SET_CONVERSION_AMOUNT:
			return {
				...state,
				conversionAmount: payload,
			};
		case types.SET_CONVERSION_ORIGIN:
			return {
				...state,
				conversionOrigin: payload,
			};
		case types.SET_CONVERSION_TARGET:
			return {
				...state,
				conversionTarget: payload,
			};
		case types.SET_CONVERSION_RESULTS:
			return {
				...state,
				conversionResults: payload,
			};
		default:
			return state;
	}
};
