import RatesTable from './RatesTable';
import RatesForm from './RatesForm';

const RatesPanel = () => {
	return (
		<div
			className="flex-fill overflow-auto"
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

export default RatesPanel;
