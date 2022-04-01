import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCodes, setRatesBase, getRates } from '../Redux/actions.js';

const RatesForm = () => {
	const dispatch = useDispatch();
	const defaultBase = useSelector(state => state.ratesBase);
	const codes = useSelector(state => state?.codes);

	useEffect(() => {
		!codes && dispatch(getCodes());
	}, [dispatch, codes]);

	const submit = e => {
		e.preventDefault();
		dispatch(getRates());
	};

	return (
		<div className="container">
			{codes && (
				<form
					className="px-3 py-4 bg-white d-flex flex-column align-items-center"
					data-cy="rates-form"
					onSubmit={e => submit(e)}
				>
					<label className="form-label mb-2" htmlFor="rates-base">
						Select base currency
					</label>
					<select
						id="rates-base"
						name="base"
						className="w-75 form-select form-select-sm "
						defaultValue={defaultBase}
						onChange={e => dispatch(setRatesBase(e.target.value))}
					>
						{codes.map(code => (
							<option key={code[0]} value={code[0]}>
								{`${code[0]} (${code[1]})`}
							</option>
						))}
					</select>

					<button
						type="submit"
						className="btn btn-outline-success btn-sm px-3 my-3"
					>
						Get Rates
					</button>
				</form>
			)}
		</div>
	);
};

export default RatesForm;
