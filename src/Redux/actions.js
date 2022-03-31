import * as types from './types';
import axios from 'axios';

const API_URL = 'https://v6.exchangerate-api.com/v6';
const API_KEY = 'ec7eec5e7967904472b9cf30';

export const getCodes = () => async dispatch => {
	// const response = await axios.get(`${API_URL}/${API_KEY}/codes`);
	// console.log(response.data.supported_codes);
	let response;
	const delayedResponse = new Promise(res => {
		setTimeout(() => {
			res(
				(response = {
					data: {
						supported_codes: [
							['ARS', 'Peso Argentino'],
							['USD', 'Dolar Estadounidense'],
						],
					},
				})
			);
		}, 3000);
	});
	await delayedResponse;
	dispatch({ type: types.CODES, payload: response.data.supported_codes });
};

export const getRates = () => async dispatch => {
	// const response = await axios.get(`${API_URL}/${KEY}/latest/${baseCurrency}`
	// console.log(response.data.conversion_rates);
	let response;
	const delayedResponse = new Promise(res => {
		setTimeout(() => {
			res(
				(response = {
					data: {
						conversion_rates: [
							['ARS', 'Peso Argentino'],
							['USD', 'Dolar Estadounidense'],
						],
					},
				})
			);
		}, 3000);
	});
	await delayedResponse;
	dispatch({ type: types.CODES, payload: response.data.supported_codes });
};
