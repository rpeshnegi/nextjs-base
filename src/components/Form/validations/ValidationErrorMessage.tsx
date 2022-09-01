import React from "react";

interface IValidationErrorMessageProp {
	[key: string]: string
	error: string
}
function ValidationErrorMessage({ error, ...other }: IValidationErrorMessageProp) {
	return (
		<div className={(other?.className || '') + " text-danger"} >{(error)}</div>
	);
}

export default ValidationErrorMessage;
