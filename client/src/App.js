import React, { Component } from 'react';
import './App.css';
import {
  Container,
  Jumbotron
  } from 'reactstrap';

import Resume from './Resume';
import Menu from './Menu'

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
        <Container fluid className="main">
            <Menu/>
            <Jumbotron>
                <h1 className="display-3">Levana Yang</h1>
                <p className="lead">Welcome to my site!</p>
            </Jumbotron>
            <Resume src={"https://docs.google.com/document/d/e/2PACX-1vRAatOYzlULG_9rKJ6R6Uj3ugYbT-2KVuNeqxfLNsCn40kns9roG22W63oLhGrX5Hrtd01IUQbrzJ0y/pub?embedded=true"}/>
        </Container>
    );
  }
}

export default App;
