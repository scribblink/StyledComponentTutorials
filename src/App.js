import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/mystyle-comp-base-on-props';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Styled Component Deep Dive - Basics of Implementation</p>
          <Button primary="true">Styled Component Button</Button>
        </header>
      </div>
    );
  }
}

export default App;
