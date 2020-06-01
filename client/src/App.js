import React, { Component } from 'react';
import './App.css';

import Menu from './Menu'
import Routes from './Routes'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
      cityList: [],
      newCityName: ''
    };
  }

  render() {
    return (
        <div>
          <Menu />
          <Routes/>
        </div>
    );
  }
}

export default App;
