import * as types from './types';

/*
import axios from 'axios';
const API_URL = 'https://v6.exchangerate-api.com/v6';
const API_KEY = 'ec7eec5e7967904472b9cf30';
*/

export const getCodes = () => async dispatch => {
	/*
	try {
	  dispatch(toggleLoading());
    dispatch(resetError())
		const {data} = await axios.get(`${API_URL}/${API_KEY}/codes`);
	  dispatch(setCodes(data.supported_codes));
	} catch (error) {
	  dispatch(setError(error));
	} finally {
	  dispatch(toggleLoading());
	}
  */

	const delayedResponse = new Promise(res => {
		setTimeout(() => {
			res({
				data: {
					supported_codes: [
						['ARS', 'Peso Argentino'],
						['USD', 'Dolar Estadounidense'],
						['EUR', 'Euro Europeo'],
					],
				},
			});
		}, 1500);
	});
	const { data } = await delayedResponse;
	dispatch(toggleLoading());
	dispatch(setCodes(data.supported_codes));
};

export const getRates = () => async (dispatch, getState) => {
	/*
	try {
	  dispatch(toggleLoading());
    dispatch(resetError())
		const {data} = await axios.get(`${API_URL}/${KEY}/latest/${getState().ratesBase}`);
	  dispatch(setRates(data.conversion_rates));
	} catch (error) {
	  dispatch(setError(error));
	} finally {
	  dispatch(toggleLoading());
	}
  */

	dispatch(toggleLoading());
	const delayedResponse = new Promise(res => {
		setTimeout(() => {
			let response;
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
	const { data } = await delayedResponse;
	dispatch(toggleLoading());
	dispatch(setRates(data.conversion_rates));
};

export const getConversion = () => async (dispatch, getState) => {
	/*
	const amount = getState().conversionAmount;
	const origin = getState().conversionOrigin;
	const target = getState().conversionTarget;
	try {
	  dispatch(toggleLoading());
    dispatch(resetError())
		const { data } = await axios.get(`${API_URL}/${KEY}/pair/${origin}/${target}/${amount}`;
	  const { base_code, taget_code, conversion_rate} = data
	  dispatch(setConversionResults({amount: amount, origin: base_code, target: target_code, result: conversion_result});
	} catch (error) {
	  dispatch(setError(error));
	} finally {
	  dispatch(toggleLoading());
	}
  */

	dispatch(toggleLoading());
	const amount = getState().conversionAmount;
	console.log(amount);
	const origin = getState().conversionOrigin;
	const target = getState().conversionTarget;
	const delayedResponse = new Promise(res => {
		setTimeout(() => {
			res({
				data: {
					base_code: origin,
					target_code: target,
					conversion_rate: Math.random() * 100,
				},
			});
		}, 1500);
	});
	const { data } = await delayedResponse;
	dispatch(toggleLoading());
	dispatch(
		setConversionResults({
			amount: amount,
			origin: data.base_code,
			target: data.target_code,
			result: data.conversion_rate.toFixed(4),
		})
	);
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

const resetError = () => {
	return {
		type: types.RESET_ERROR,
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

export const setConversionAmount = amount => {
	return {
		type: types.SET_CONVERSION_AMOUNT,
		payload: amount,
	};
};

export const setConversionOrigin = origin => {
	return {
		type: types.SET_CONVERSION_ORIGIN,
		payload: origin,
	};
};

export const setConversionTarget = target => {
	return {
		type: types.SET_CONVERSION_TARGET,
		payload: target,
	};
};

const setConversionResults = resultData => {
	return {
		type: types.SET_CONVERSION_RESULTS,
		payload: resultData,
	};
};

const setRates = rates => {
	return {
		type: types.SET_RATES,
		payload: rates,
	};
};
