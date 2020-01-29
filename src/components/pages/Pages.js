import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Example from './example/Example';
import FilterableProducts from './grouping-products/FilterableProducts';

import _404 from '../template/content/error/404';

export default class Pages extends React.Component{
	constructor(props){
		super(props);

		this.state = {

		}
	}

	render(){
		return(
			<Switch>
				<Route path="/" exact component=""/>
				<Route path="/example" component={Example}/>
				<Route path="/filterable products" component={FilterableProducts}/>
				<Route component={_404}/>
			</Switch>
		)
	}

}
