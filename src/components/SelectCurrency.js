import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCodes } from '../Redux/actions.js';

const SelectCurrency = ({ id, name, defaultSelected, classes }) => {
	const dispatch = useDispatch();
	const codes = useSelector(state => state.codes);

	useEffect(() => {
		if (!codes.length) {
			dispatch(getCodes());
		}
	}, [dispatch, codes]);

	return (
		<>
			<select
				id={id}
				name={name}
				className={classes}
				defaultValue={defaultSelected}
			>
				{codes.map(code => (
					<option key={code[0]} value={code[0]}>
						{`${code[0]} (${code[1]})`}
					</option>
				))}
			</select>
		</>
	);
};

export default SelectCurrency;
