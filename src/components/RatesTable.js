import { useSelector } from 'react-redux';

const RatesTable = () => {
	const rates = useSelector(state => state.rates);
	const codes = useSelector(state => state.codes);

	return (
		<table
			className={`flex-fill overflow-auto table table-sm table-hover d-flex flex-column align-items-stretch px-5 ${
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
							{`${tla}`}{' '}
							<span className="fw-light">
								{`(${
									codes.filter(([codetla, fullName]) => codetla === tla)[0][1]
								})`}
							</span>
						</th>

						<td className="w-50">{exchangeRate}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default RatesTable;
