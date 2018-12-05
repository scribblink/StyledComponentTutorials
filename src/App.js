import React, { Component } from 'react';
import ThemeContext from './components/ThemeContext';
import HelloWorld from './components/HelloWorld';

class App extends Component {
  state = {
    headerColor: '#f55b23',
    textColor: 'green'
  };
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <HelloWorld />
      </ThemeContext.Provider>
    );
  }
}

export default App;
