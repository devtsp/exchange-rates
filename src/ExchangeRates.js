const ExchangeRates = () => {
	return (
		<div
			class="tab-pane fade show active flex-fill overflow-auto"
			aria-labelledby="global-exchange-rates-tab"
			id="exchange-rates"
			data-cy="rates-panel"
		>
			<div class="container p-3">
				<form
					class="px-3 py-4 bg-white d-flex flex-column align-items-center"
					data-cy="rates-form"
				>
					<label class="form-label mb-3" for="rates-base">
						Select base currency
					</label>
					<select
						id="rates-base"
						name="base"
						class="form-select form-select-sm m-0"
					></select>
					<button class="btn btn-outline-success btn-sm px-3 my-3">
						Get Rates
					</button>
				</form>
			</div>
			<div
				id="exchange-rates-results"
				class="container d-flex flex-column align-items-stretch overflow-auto"
			>
				<table
					class="table table-sm table-hover d-flex flex-column align-items-stretch px-5 overflow-auto visually-hidden"
					data-cy="fetched-rates-table"
				>
					<thead>
						<tr class="d-flex">
							<th scope="col" class="w-50">
								Name
							</th>
							<th scope="col" class="w-50">
								Exchange Rate
							</th>
						</tr>
					</thead>
					<tbody class="overflow-auto"></tbody>
				</table>
			</div>
			<div
				class="error mx-4 alert alert-danger text-center d-none"
				role="alert"
				data-cy="rates-error"
			></div>
		</div>
	);
};

export default ExchangeRates;
