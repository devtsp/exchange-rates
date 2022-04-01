import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCodes, setRatesBase } from '../Redux/actions.js';

const SelectCurrency = ({ id, name, defaultSelected, classes }) => {
	const dispatch = useDispatch();
	const codes = useSelector(state => state?.codes);

	useEffect(() => {
		!codes && dispatch(getCodes());
	}, [dispatch, codes]);

	return (
		<>
			{codes && (
				<select
					id={id}
					name={name}
					className={classes}
					defaultValue={defaultSelected}
					onChange={e => dispatch(setRatesBase(e.target.value))}
				>
					{codes.map(code => (
						<option key={code[0]} value={code[0]}>
							{`${code[0]} (${code[1]})`}
						</option>
					))}
				</select>
			)}
		</>
	);
};

export default SelectCurrency;
