import React, { Component } from 'react';

import Menu from './UniversalComponents/Menu'
import Footer from './UniversalComponents/Footer'
import Routes from './UniversalComponents/Routes'

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
            {/*  TODO: add button that takes you to the top of the page*/}
            <Footer/>
        </div>
    );
  }
}

export default App;
