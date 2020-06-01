// a page for links and social media

import React, { Component } from 'react'
// import Menu from "./Menu";
import {Container, Jumbotron} from "reactstrap";

class Links extends Component {
    render() {
        return (
            <Container fluid className="main">
                {/*<Menu/>*/}
                <Jumbotron>
                    <h1 className="display-3">Links</h1>
                </Jumbotron>
            </Container>
        );
    }
}

export default Links