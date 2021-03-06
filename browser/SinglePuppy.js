import React, { Component } from 'react';

export default class SinglePuppy extends Component {
	componentDidMount() {
		this.props.onLoadSinglePuppy(this.props.match.params.puppyId);
	}
	render() {
		return (
			<div>
				<h2>{this.props.puppy.name}</h2>
				<div>
					<img src={this.props.puppy.image} />
				</div>
			</div>
		);
	}
}
