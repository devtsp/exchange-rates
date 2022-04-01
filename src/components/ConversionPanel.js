import ConversionForm from './ConversionForm';
import ConversionResult from './ConversionResult';

const ConversionPanel = () => {
	return (
		<div id="pair-conversion" data-cy="conversion-panel">
			<ConversionForm />
			<ConversionResult />
		</div>
	);
};

export default ConversionPanel;
