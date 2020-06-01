// a page to show off past cs projects

import React, { Component } from 'react'
import Menu from "./Menu";
import {Container, Jumbotron} from "reactstrap";

class Projects extends Component {
    render() {
        return (
            <Container fluid className="main">
                <Menu/>
                <Jumbotron>
                    <h1 className="display-3">Projects</h1>
                </Jumbotron>
            </Container>
        );
    }
}

export default Projects