import React from 'react';
import { Link } from 'react-router-dom';

class MyComponent extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<React.Fragment>
				<h1> My Component </h1>
				<Link to={'/othercomp'}> Link to Other Component</Link>
			</React.Fragment>
			)
	}
}

export default MyComponent;