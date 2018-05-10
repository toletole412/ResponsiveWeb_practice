import React, { Component } from 'react';
import Article from './components/Article';
import Transition from './components/Transition';

class App extends Component {
  render() {
    return (
    <div>
      <Article />
      <Transition />
    </div>
    );
  }
}

export default App;
