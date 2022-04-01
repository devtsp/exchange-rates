import SelectCurrency from './SelectCurrency';
import { useDispatch, useSelector } from 'react-redux';
import { getRates } from '../Redux/actions';
import { useEffect } from 'react';

const RatesForm = () => {
	const dispatch = useDispatch();
	const defaultBase = useSelector(state => state.ratesBase);

	const submit = e => {
		e.preventDefault();
		dispatch(getRates());
	};

	return (
		<div className="container">
			<form
				className="px-3 py-4 bg-white d-flex flex-column align-items-center"
				data-cy="rates-form"
				onSubmit={e => submit(e)}
			>
				<label className="form-label mb-2" htmlFor="rates-base">
					Select base currency
				</label>
				<SelectCurrency
					id="rates-base"
					name="base"
					defaultSelected={defaultBase}
					classes="w-75 form-select form-select-sm "
				/>

				<button
					type="submit"
					className="btn btn-outline-success btn-sm px-3 my-3"
				>
					Get Rates
				</button>
			</form>
		</div>
	);
};

const RatesTable = () => {
	const rates = useSelector(state => state.rates);

	return (
		<table
			className={`table table-sm table-hover d-flex flex-column align-items-stretch px-5 overflow-auto ${
				!rates && 'visually-hidden'
			} `}
			data-cy="fetched-rates-table"
		>
			<thead>
				<tr className="d-flex">
					<th scope="col" className="w-50">
						Name
					</th>
					<th scope="col" className="w-50">
						Exchange Rate
					</th>
				</tr>
			</thead>
			<tbody className="overflow-auto">
				{Object.entries({ ...rates }).map(([tla, exchangeRate], i) => (
					<tr key={tla} className={`d-flex ${!i && 'table-success'}`}>
						<th className="w-50" scope="row">
							{tla}
						</th>
						<td className="w-50">{exchangeRate}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

const ExchangeRates = () => {
	return (
		<div
			className="tab-pane fade show active flex-fill overflow-auto"
			aria-labelledby="global-exchange-rates-tab"
			id="exchange-rates"
			data-cy="rates-panel"
		>
			<RatesForm />
			<div
				id="exchange-rates-results"
				className="container d-flex flex-column align-items-stretch overflow-auto"
			>
				<RatesTable />
			</div>
		</div>
	);
};

export default ExchangeRates;
