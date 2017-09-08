import React, { Component } from 'react';

import NewMeasure from '../components/NewMeasure';

import '../assets/stylesheets/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewMeasure />
      </div>
    );
  }
}

export default App;
