import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { loadPuppiesThunk } from './action-creators';

//const hardCodedData = [ { id: 1, name: 'Cody' }, { id: 2, name: 'Ben' }, { id: 3, name: 'Bubba' } ];

const mapStateToProps = function(state) {
	return {
		puppies: state.allPuppies
	};
};
const mapDispatchToProps = function(dispatch) {
	return {
		onLoadPuppies: function() {
			const thunk = loadPuppiesThunk();
			dispatch(thunk);
		}
	};
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const AllPuppiesContainer = componentCreator(AllPuppies);
export default AllPuppiesContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(AllPuppies);
