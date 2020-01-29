import React from 'react';

export default class Content extends React.Component{
	constructor(props){
		super(props);

		this.state = {

		}
	}

	render(){
		return(
			<div className="content">
				<div className="container">
      		{this.props.children}
      	</div>
      </div>
		)
	}
}
