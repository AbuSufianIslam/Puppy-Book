import { combineReducers } from 'redux';
import { ALL_PUPPIES, SELECT_PUPPY } from './action-creators';

const allPuppiesReducer = (state = [], action) => {
	switch (action.type) {
		case ALL_PUPPIES:
			return action.puppies;
		default:
			return state;
	}
};

const singlePuppyReducer = (state = {}, action) => {
	switch (action.type) {
		case SELECT_PUPPY:
			return action.selectedPuppy;
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	allPuppies: allPuppiesReducer,
	selectedPuppy: singlePuppyReducer
});

export default rootReducer;
