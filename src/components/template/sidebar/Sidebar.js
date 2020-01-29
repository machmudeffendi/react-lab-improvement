import React from 'react';

import Nav from './comps/Nav';
import NavItem from './comps/NavItem';

export default class Sidebar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      sidebar: 'hide',
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e){
    this.setState((state) => ({
      sidebar: state.sidebar === 'hide' ? 'show' : 'hide',
    }))
  }

  render(){
    return(
      <>
        <span className="menu-bar fa fa-bars" onMouseOver={this.toggleMenu} onClick={this.toggleMenu}></span>
        <div className={'sidebar '+ this.state.sidebar}>
          <Nav>
            <NavItem label="Example" toggleMenu={this.toggleMenu}/>
            <NavItem label="Filterable Products" toggleMenu={this.toggleMenu}/>
          </Nav>
        </div>
      </>
    )
  }
}
