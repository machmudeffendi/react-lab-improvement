import React from 'react';
// import { Switch, Route } from 'react-router-dom';

import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';

import Pages from '../pages/Pages';

// react-bootstrap only

class Main extends React.Component {
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
    // the ThmedButton button inside the THemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme

    return(
      <div className="main">

        <Sidebar />

        <Content>
          <Pages />
        </Content>
      </div>
    )
  }
}

export default Main;
