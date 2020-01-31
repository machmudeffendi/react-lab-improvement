import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Example from './example/Example';
import FilterableProducts from './grouping-products/FilterableProducts';
import TimeReminder from './timereminder/TimeReminder';
import ReactHooks from './react-hooks/ReactHooks';
import ReactTesting from './react-testing/ReactTesting';

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
				{/*<Route path="/" exact component=""/>
				<Route path="/example" component={Example}/>
				<Route path="/filterable products" component={FilterableProducts}/>
				<Route path="/time reminder" component={TimeReminder}/>
				<Route component={_404}/>*/}
				{
					Menu.map((item,index) => (
						<Route key={index} path={"/"+item.menu.toLowerCase()} component={item.component}/>
					))
				}
				<Route component={_404}/>
			</Switch>
		)
	}

}

export const Menu = [
	{ menu: 'Example', component: Example },
	{ menu: 'Filterable Products', component: FilterableProducts },
	{ menu: 'Time Reminder', component: TimeReminder },
	{ menu: 'React Hooks', component: ReactHooks },
	{ menu: 'React Testing', component: ReactTesting },
]