import { connect } from 'react-redux';
import SinglePuppy from './SinglePuppy';
import { siglePuppyThunk } from './action-creators';

// const hardcodedPuppy = {
// 	id: 1,
// 	name: 'Taylor',
// 	image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
// };

const mapStateToProps = (state) => ({
	puppy: state.selectedPuppy
});

const mapDispatchToProps = (dispatch) => ({
	onLoadSinglePuppy: (puppyId) => dispatch(siglePuppyThunk(puppyId))
});

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const SinglePuppyContainer = componentCreator(SinglePuppy);
export default SinglePuppyContainer;
