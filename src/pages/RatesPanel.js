import RatesTable from '../components/RatesTable';
import RatesForm from '../components/RatesForm';

const RatesPanel = () => {
	return (
		<div
			id="RatesPanel"
			className="flex-fill d-flex flex-column overflow-auto"
			data-cy="rates-panel"
		>
			<RatesForm />
			<RatesTable />
		</div>
	);
};

export default RatesPanel;
