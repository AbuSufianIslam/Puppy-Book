'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppy from './SinglePuppy';
// import SinglePuppyContainer from './SinglePuppyContainer';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store';

export const hardcodedPuppy = {
	id: 1,
	name: 'Taylor',
	image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
};

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div className="container flexbox-container">
				<div className="jumbotron">
					<Route exact path="/puppies" component={AllPuppiesContainer} />
					<Route path="/puppies/:puppyId" component={SinglePuppy} />
				</div>
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
);
