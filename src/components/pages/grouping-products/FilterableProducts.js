import React from 'react';

import SearchBar from './comps/SearchBar';
import ProductTable from './comps/ProductTable';

export default class FilterableProducts extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false,
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText){
    this.setState({filterText: filterText});
  }

  handleInStockChange(inStockOnly){
    this.setState({inStockOnly: inStockOnly});
  }

  render(){
    return(
      <div>
        <h1 className="mb-5 text-center">Thinking in React: Step 5</h1>

        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />

        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}

FilterableProducts.defaultProps = {
  'products' : [{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}]
}
