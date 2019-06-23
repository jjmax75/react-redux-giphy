import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import Viewer from "./screens/Viewer";

ReactDOM.render(
	<Provider store={store}>
		<Viewer />
	</Provider>,
	document.getElementById("root")
);
