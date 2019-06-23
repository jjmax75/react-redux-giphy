import "./Viewer.css";
import React, { useState } from "react";

import SearchControl from "./../../components/molecules/SearchControl";
import DisplayResult from "./../../components/molecules/DisplayResult";

const Viewer = props => {
	const [result, setResult] = useState(null);

	const getResult = async term => {
		const result = await fetch(
			`https://api.giphy.com/v1/gifs/random?api_key=e26089724ab941889d776827bf7c0c32&tag=${term}`
		);
		const parsedResult = await result.json();

		setResult(parsedResult);
	};

	return (
		<div className="App">
			<header className="App-header">Giphy Quick View</header>
			<main>
				<SearchControl
					label="Search for a Gif"
					getResult={term => getResult(term)}
					buttonName="Search"
				/>
				{result && (
					<DisplayResult
						imageUrl={result.data.fixed_height_downsampled_url}
						imageDescription={result.data.fixed_height_downsampled_url}
					/>
				)}
			</main>
			<footer />
		</div>
	);
};

export default Viewer;
