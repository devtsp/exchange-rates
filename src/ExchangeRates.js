const ExchangeRates = () => {
	return (
		<div
			className="tab-pane fade show active flex-fill overflow-auto"
			aria-labelledby="global-exchange-rates-tab"
			id="exchange-rates"
			data-cy="rates-panel"
		>
			<div className="container">
				<form
					className="px-3 py-4 bg-white d-flex flex-column align-items-center"
					data-cy="rates-form"
				>
					<label className="form-label mb-2" htmlFor="rates-base">
						Select base currency
					</label>
					<select
						id="rates-base"
						name="base"
						className="form-select form-select-sm m-0 w-75"
					></select>
					<button className="btn btn-outline-success btn-sm px-3 my-3">
						Get Rates
					</button>
				</form>
			</div>
			<div
				id="exchange-rates-results"
				className="container d-flex flex-column align-items-stretch overflow-auto"
			>
				<table
					className="table table-sm table-hover d-flex flex-column align-items-stretch px-5 overflow-auto visually-hidden"
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
					<tbody className="overflow-auto"></tbody>
				</table>
			</div>
			<div
				className="error mx-4 alert alert-danger text-center d-none"
				role="alert"
				data-cy="rates-error"
			></div>
		</div>
	);
};

export default ExchangeRates;
