import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
	getCodes,
	setConversionOrigin,
	setConversionTarget,
	setConversionAmount,
	getConversion,
} from '../Redux/actions';

const ConversionForm = () => {
	const dispatch = useDispatch();
	const codes = useSelector(state => state?.codes);
	const conversionOrigin = useSelector(state => state.conversionOrigin);
	const conversionTarget = useSelector(state => state.conversionTarget);

	const submit = e => {
		e.preventDefault();
		dispatch(getConversion());
	};

	useEffect(() => {
		!codes && dispatch(getCodes());
	}, [dispatch, codes]);

	return (
		<>
			{codes && (
				<form
					className="px-3 py-4 d-flex flex-column align-items-center"
					data-cy="conversion-form"
					onSubmit={submit}
				>
					<label htmlFor="amount" className="form-label">
						Amount:
					</label>
					<input
						name="amount"
						id="amount"
						type="number"
						min="0"
						step="any"
						className="w-75 form-control form-control-sm mb-2 text-center"
						data-cy="conversion-amount"
						onChange={e => dispatch(setConversionAmount(e.target.value))}
						required
					/>
					<label htmlFor="conversion-origin" className="form-label">
						Base Currency:
					</label>
					<select
						id="conversion-origin"
						name="origin"
						className="w-75 form-select form-select-sm mb-2"
						defaultValue={conversionOrigin}
						onChange={e => dispatch(setConversionOrigin(e.target.value))}
					>
						{codes.map(code => (
							<option key={code[0]} value={code[0]}>
								{`${code[0]} (${code[1]})`}
							</option>
						))}
					</select>

					<label htmlFor="target" className="form-label">
						Target Currency:
					</label>
					<select
						id="target"
						name="target"
						className="w-75 form-select form-select-sm"
						defaultValue={conversionTarget}
						onChange={e => dispatch(setConversionTarget(e.target.value))}
					>
						{codes.map(code => (
							<option key={code[0]} value={code[0]}>
								{`${code[0]} (${code[1]})`}
							</option>
						))}
					</select>
					<button
						className="btn btn-outline-success btn-sm px-3 my-3"
						cy-data="conversion-submit"
					>
						Convert
					</button>
				</form>
			)}
		</>
	);
};

export default ConversionForm;
