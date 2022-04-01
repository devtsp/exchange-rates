import { useSelector } from 'react-redux';

const Loading = () => {
	const isLoading = useSelector(state => state.loading)
		? ''
		: 'visually-hidden';
	return (
		<div
			id="loading-mask"
			className={`d-flex flex-column justify-content-center align-items-center position-fixed top-0 vh-100 vw-100 opacity-50 bg-secondary  ${isLoading}`}
		>
			<div className="spinner-border"></div>
			<br />
			<span className="d-block">Loading...</span>
		</div>
	);
};

export default Loading;
