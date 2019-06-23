import { GET_GIF } from "./Viewer.constants";

export const getGif = searchTerm => async dispatch => {
	const result = await fetch(
		`https://api.giphy.com/v1/gifs/random?api_key=e26089724ab941889d776827bf7c0c32&tag=${searchTerm}`
	);
	const parsedResult = await result.json();
	return dispatch(setGifResult(parsedResult));
};

const setGifResult = result => ({
	type: GET_GIF,
	payload: result
});
