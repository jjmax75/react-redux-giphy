import React, { useState } from "react";

import Button from "./../../atoms/Button";
import InputField from "./../../atoms/InputField";
import Label from "./../../atoms/Label";

const SearchControl = props => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = event => {
		setInputValue(event.target.value);
	};

	const detectEnter = event => {
		if (event.key === "Enter") {
			event.preventDefault();
			props.getResult(inputValue);
		}
	};

	return (
		<React.Fragment>
			<Label name={props.label} for="search" />
			<InputField
				name="search"
				type="text"
				value={inputValue}
				handleChange={handleInputChange}
				handleKeyUp={detectEnter}
			/>
			<Button
				handleClick={() => props.getResult(inputValue)}
				name={props.buttonName}
			/>
		</React.Fragment>
	);
};

export default SearchControl;
