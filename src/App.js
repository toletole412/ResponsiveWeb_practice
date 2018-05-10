import React, { Component } from 'react';
import Article from './components/Article';
import Transition from './components/Transition';
import Animation from './components/Animation';
import SassTest from './components/SassTest';
import ResponsiveButton from './components/ResponsiveButton';

class App extends Component {
  render() {
    return (
    <div>
      <Article />
      <Transition />
      <Animation />
      <SassTest />
      <ResponsiveButton />
    </div>
    );
  }
}

export default App;
