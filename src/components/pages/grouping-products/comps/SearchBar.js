import React from 'react';

import Form from 'react-bootstrap/Form';

export default class Searchbar extends React.Component{
  constructor(props){
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e){
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e){
    this.props.onInStockChange(e.target.checked);
  }

  render(){
    return(
      <Form>
        <Form.Group controlId="searchInput">
          <Form.Control type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextChange}/>
        </Form.Group>
        <Form.Group controlId="stockcheck">
          <Form.Check type="checkbox" label="Only show products in stock" checked={this.props.inStockOnly} onChange={this.handleInStockChange}/>
        </Form.Group>
      </Form>
    )
  }
}
