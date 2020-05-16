import React, { Component } from 'react';
import './App.css';
import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col,
} from 'reactstrap';

import Resume from './Resume';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resume: null,
      projects: [],
      status: ''
    };
  }
  render() {
    return (
        <Container className="App">
          <Navbar dark color="dark">
            <NavbarBrand href="/">Levana Yang</NavbarBrand>
            <Row>
              <Col></Col>
            </Row>
            <Row>
              <Col>
              </Col>
            </Row>
            <Resume />
          </Navbar>
        </Container>
    );
  }
}

export default App;
