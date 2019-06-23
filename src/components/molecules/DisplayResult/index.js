import React from "react";

import Image from "./../../atoms/Image";
import Text from "./../../atoms/Text";

const DisplayResult = props => (
	<React.Fragment>
		<Image imageUrl={props.imageUrl} />
		<Text content={props.imageDescription} />
	</React.Fragment>
);

export default DisplayResult;
