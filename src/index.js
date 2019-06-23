import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import ViewerContainer from "./screens/Viewer/Viewer.container";

ReactDOM.render(
	<Provider store={store}>
		<ViewerContainer />
	</Provider>,
	document.getElementById("root")
);
