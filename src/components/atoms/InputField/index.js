import React from "react";

const InputField = props => (
	<input
		name={props.name}
		type={props.type}
		value={props.value}
		onChange={props.handleChange}
		onKeyUp={props.handleKeyUp}
	/>
);

export default InputField;
