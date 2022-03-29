import React from 'react';

const PairConversion = () => {
	return (
		<div id="pair-conversion" data-cy="conversion-panel">
			<div className="container">
				<form
					className="px-3 pt-4 needs-validation d-flex flex-column align-items-center"
					data-cy="conversion-form"
					noValidate
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
						required
					/>
					<div className="invalid-feedback">
						Please select an amount to convert.
					</div>
					<label htmlFor="conversion-origin" className="form-label">
						Base Currency:
					</label>
					<select
						name="origin"
						className="w-75 form-select form-select-sm mb-2"
						aria-label="Select Origin Currency"
						id="conversion-origin"
					></select>
					<label htmlFor="target" className="form-label">
						Target Currency:
					</label>
					<select
						name="target"
						className="w-75 form-select form-select-sm"
						aria-label="Select Target Currency"
						id="target"
					></select>
					<button
						className="btn btn-outline-success btn-sm px-3 my-3"
						cy-data="conversion-submit"
					>
						Convert
					</button>
				</form>
			</div>
			<div className="container-fluid px-4 w-auto">
				<p
					id="conversion-result"
					className="px-4 py-2 border-3 border-start border-success rounded rounded-3 bg-light visually-hidden"
					data-cy="conversion-result"
				>
					<span className="text-black-50 fs-3"></span>
					<br />
					<span className="text-black fs-1"></span>
				</p>
			</div>
		</div>
	);
};

export default PairConversion;
