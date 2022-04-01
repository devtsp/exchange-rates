import { useSelector } from 'react-redux';

const ConversionResult = () => {
	const conversionResults = useSelector(state => state.conversionResults);

	return (
		<>
			{conversionResults && (
				<div className="container-fluid px-4 w-auto">
					<p
						id="conversion-result"
						className="px-4 py-2 border-3 border-start border-success rounded rounded-3 bg-light"
						data-cy="conversion-result"
					>
						<span className="text-black-50 fs-3">{`${conversionResults.amount} ${conversionResults.origin} = `}</span>
						<br />
						<span className="text-black fs-1">{`${conversionResults.result} ${conversionResults.target}`}</span>
					</p>
				</div>
			)}
		</>
	);
};

export default ConversionResult;
