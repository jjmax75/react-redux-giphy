import { connect } from "react-redux";
import Viewer from "./";
import { getGif } from "./Viewer.actions";

const mapStateToProps = state => ({
	imageUrl:
		state.Viewer.activeGif.data &&
		state.Viewer.activeGif.data.fixed_height_downsampled_url
});

const mapDispatchToProps = dispatch => ({
	getGif: searchTerm => dispatch(getGif(searchTerm))
});

const ViewerContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Viewer);

export default ViewerContainer;
