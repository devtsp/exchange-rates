import * as types from './types';

const initialState = {
	codes: [],
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.CODES:
			return { ...state, codes: [...payload] };
		default:
			return state;
	}
};
