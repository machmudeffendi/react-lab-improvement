import React from 'react';

import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

import 'bootstrap/dist/css/bootstrap.min.css';

// React bootstrap
import Button from 'react-bootstrap/Button';

function Toolbar(props){
  return(
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  )
}

function Page(props){
  return(
    props.children
  )
}

function Section(props){
    return(
      <div style={{backgroundColor:'#cccccc'}}>
        {props.children}
      </div>
    )
}

class Example extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render(){
    // the ThmedButton button inside the THemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme

    return(
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme}/>
        </ThemeContext.Provider>
        <Section>
          <ThemedButton/>
        </Section>
        <Button variant="primary">
          Arema
        </Button>
      </Page>
    )
  }
}

export default Example;
