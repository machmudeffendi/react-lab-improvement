import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Main from './components/template/Main';

// Assets
import './assets/css/style.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// icons
import '@fortawesome/fontawesome-free/css/all.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    )
  }
}

export default App;
