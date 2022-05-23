import ConversionForm from '../components/ConversionForm';
import ConversionResult from '../components/ConversionResult';

const ConversionPanel = () => {
	return (
		<div id="pair-conversion" data-cy="conversion-panel">
			<ConversionForm />
			<ConversionResult />
		</div>
	);
};

export default ConversionPanel;
