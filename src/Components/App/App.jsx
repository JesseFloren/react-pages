import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Main from '../MainPage';

class App extends React.Component 
{
  render() {
    return(
      <div className="App">
        <Router>
          <Route path="/" exact component={Main} />
        </Router>
      </div>
    )
  }
}

export default App;
