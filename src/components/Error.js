import { useSelector } from 'react-redux';

const Error = () => {
	const error = useSelector(state => state.error);
	return (
		<>
			{error && (
				<div
					className="error alert alert-danger mx-4 text-center d-none"
					data-cy="conversion-error"
				></div>
			)}
		</>
	);
};

export default Error;
