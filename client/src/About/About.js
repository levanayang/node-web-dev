// a page for to learn more about me (blog) and how to contact me

import React, { Component } from 'react'
import {Container, Jumbotron} from "reactstrap";

import ContactForm from "./ContactForm";

class About extends Component {
    render() {
        return (
            <Container fluid className="main">
                {/*<Menu/>*/}
                <Jumbotron>
                    <h1 className="display-3">About Me</h1>
                </Jumbotron>
                <ContactForm/>
            </Container>
        );
    }
}

export default About