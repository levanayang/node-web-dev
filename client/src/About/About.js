// a page for to learn more about me (blog) and how to contact me

import React, { Component } from 'react'
import {Container, Jumbotron, Col, Row} from "reactstrap";

import ContactForm from "./ContactForm";

class About extends Component {
    render() {
        return (
            <Container fluid className="main">
                {/*<Menu/>*/}
                <Jumbotron className="about-jumbotron">
                    <h1 className="display-4">About Me</h1>
                </Jumbotron>
                <Row>
                    <Col></Col>
                    <Col sm="4" lg="4"><ContactForm/></Col>
                </Row>
            </Container>
        );
    }
}

export default About