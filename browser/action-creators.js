import axios from 'axios';

export const ALL_PUPPIES = 'ALL_PUPPIES';
export const SELECT_PUPPY = 'SELECT_PUPPY';

const allPuppiesAction = (puppies) => ({
	type: ALL_PUPPIES,
	puppies
});

export const loadPuppiesThunk = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get('/api/puppies');
			dispatch(allPuppiesAction(data));
		} catch (error) {
			console.error(error);
		}
	};
};

const selectPuppy = (selectedPuppy) => ({
	type: SELECT_PUPPY,
	selectedPuppy
});

export const siglePuppyThunk = (puppyId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`'api/puppies/${puppyId}'}`);
			dispatch(selectPuppy(data));
		} catch (error) {
			console.error(eroor);
		}
	};
};
