import { useSelector } from 'react-redux';

const Loading = () => {
	const isLoading = useSelector(state => state.loading)
		? ''
		: 'visually-hidden';

	return (
		<div
			id="Loading"
			className={`d-flex flex-column justify-content-center align-items-center position-absolute w-100 h-100 top-0  start-0 opacity-50 bg-secondary  ${isLoading}`}
		>
			<div className="spinner-border"></div>
			Loading..
		</div>
	);
};

export default Loading;
