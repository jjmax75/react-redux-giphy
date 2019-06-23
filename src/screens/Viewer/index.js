import "./Viewer.css";
import React from "react";

import SearchControl from "./../../components/molecules/SearchControl";
import DisplayResult from "./../../components/molecules/DisplayResult";

const Viewer = props => {
	// const [result, setResult] = useState(null);

	// const getResult = async term => {
	// 	const result = await fetch(
	// 		`https://api.giphy.com/v1/gifs/random?api_key=e26089724ab941889d776827bf7c0c32&tag=${term}`
	// 	);
	// 	const parsedResult = await result.json();

	// 	setResult(parsedResult);
	// };

	return (
		<div className="App">
			<header className="App-header">Giphy Quick View</header>
			<main>
				<SearchControl
					label="Search for a Gif"
					getResult={term => props.getGif(term)}
					buttonName="Search"
				/>
				{props.imageUrl && (
					<DisplayResult
						imageUrl={props.imageUrl}
						imageDescription={props.imageUrl}
					/>
				)}
			</main>
			<footer />
		</div>
	);
};

export default Viewer;
