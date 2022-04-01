import * as types from './types';
import axios from 'axios';

const API_URL = 'https://v6.exchangerate-api.com/v6';
const API_KEY = 'ec7eec5e7967904472b9cf30';

export const getCodes = () => async dispatch => {
	// try {
	//   dispatch(toggleLoading());
	// 	const response = await axios.get(`${API_URL}/${API_KEY}/codes`);
	//   dispatch(setCodes(response.data.supported_codes));
	// } catch (error) {
	//   dispatch(setError(error));
	// } finally {
	//   dispatch(toggleLoading());
	// }

	let response;
	const delayedResponse = new Promise(res => {
		setTimeout(() => {
			res(
				(response = {
					data: {
						supported_codes: [
							['ARS', 'Peso Argentino'],
							['USD', 'Dolar Estadounidense'],
							['EUR', 'Euro Europeo'],
						],
					},
				})
			);
		}, 1500);
	});
	await delayedResponse;
	dispatch(toggleLoading());
	dispatch(setCodes(response.data.supported_codes));
};

export const getRates = () => async (dispatch, getState) => {
	// try {
	//   dispatch(toggleLoading());
	// 	const response = await axios.get(`${API_URL}/${KEY}/latest/${getState().ratesBase};
	//   dispatch(setRates(response.data.conversion_rates));
	// } catch (error) {
	//   dispatch(setError(error));
	// } finally {
	//   dispatch(toggleLoading());
	// }

	let response;
	dispatch(toggleLoading());
	const delayedResponse = new Promise(res => {
		setTimeout(() => {
			switch (getState().ratesBase) {
				case 'USD':
					response = {
						data: {
							conversion_rates: {
								'USD': 1,
								'ARS': 200,
								'EUR': 0.9,
							},
						},
					};
					break;
				case 'ARS':
					response = {
						data: {
							conversion_rates: {
								'ARS': 1,
								'USD': 0.02,
								'EUR': 0.016,
							},
						},
					};
					break;
				case 'EUR':
					response = {
						data: {
							conversion_rates: {
								'EUR': 1,
								'ARS': 250,
								'USD': 1.3,
							},
						},
					};
					break;
				default:
					response = {
						data: {
							conversion_rates: {
								'USD': 1,
								'ARS': 200,
								'EUR': 0.9,
							},
						},
					};
					break;
			}
			res(response);
		}, 1500);
	});
	const outResponse = await delayedResponse;
	dispatch(toggleLoading());
	dispatch(setRates(outResponse.data.conversion_rates));
};

const toggleLoading = () => {
	return {
		type: types.TOGGLE_LOADING,
	};
};

const setError = error => {
	return {
		type: types.SET_ERROR,
		payload: error,
	};
};

const setCodes = codes => {
	return {
		type: types.SET_CODES,
		payload: codes,
	};
};

export const setRatesBase = base => {
	return {
		type: types.SET_RATES_BASE,
		payload: base,
	};
};

const setRates = rates => {
	return {
		type: types.SET_RATES,
		payload: rates,
	};
};
