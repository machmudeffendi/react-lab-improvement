import React from 'react';

import Hello from './Hello';
import User from './User';
import Toggle from './Toggle';

export default class ReactTesting extends React.Component{

	constructor(props){
		super(props);

		this.state = {

		}
	}

	render(){
		return(
			<div>
				<h1 className="mb-5">React Testing</h1>
				<p>Run with : npm test</p><br/>

				<label>Hello.js : </label>
				<Hello />
				<Hello name="Anna (with props name)"/>

				<label>data fetching (user.js) : </label>
				<User />

				<br/>

				<label>Events : </label>
				<Toggle />

			</div>
		)
	}

}