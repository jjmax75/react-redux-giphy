import { GET_GIF } from "./Viewer.constants";

const initialState = {
	activeGif: {}
};

const Viewer = (state = initialState, action) => {
	switch (action.type) {
		case GET_GIF:
			return {
				...state,
				activeGif: action.payload
			};
		default:
			return state;
	}
};

export default Viewer;
