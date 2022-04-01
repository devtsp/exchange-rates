import { useSelector } from 'react-redux';

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

export default RatesTable;
