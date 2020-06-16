// a page for links and social media

import React, { Component } from 'react'
// import Menu from "./Menu";
import {Container,
    Jumbotron,
    Row,
    Col,
    ListGroup,
    ListGroupItem
} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithubAlt, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

class Links extends Component {
    render() {
        return (
            <Container fluid className="main">
                {/*<Menu/>*/}
                <Jumbotron fluid className="links-jumbotron">
                    <h1 className="display-4">Links</h1>
                </Jumbotron>
                <Row>
                    <Col  xs="6">
                        <h3>Professional</h3>
                        <ListGroup>
                            <ListGroupItem className="list-professional-links"
                                           tag="a"
                                           href="https://www.linkedin.com/in/levanavyang/">
                                <FontAwesomeIcon className="links-icon"
                                                 icon={faLinkedin}
                                                 size="2x" />
                                Linked In
                            </ListGroupItem>
                            <ListGroupItem className="list-professional-links"
                                           tag="a"
                                           href="https://github.com/levanayang">
                                <FontAwesomeIcon className="links-icon"
                                                 icon={faGithubAlt}
                                                 size="2x" />
                                GitHub
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col xs="6">
                        <h3>Social Media</h3>
                        {/*TODO: make button to hide and collapse these links*/}
                        <ListGroup>
                            <ListGroupItem className="list-social-media"
                                           tag="a"
                                           href="https://www.facebook.com/levana.yang.5">
                                <FontAwesomeIcon className="links-icon"
                                                 icon={faFacebook}
                                                 size="2x" />
                                Facebook
                            </ListGroupItem>
                            <ListGroupItem className="list-social-media"
                                           tag="a"
                                           href="https://www.instagram.com/climili/">
                                <FontAwesomeIcon className="links-icon"
                                                 icon={faInstagram}
                                                 size="2x" />
                                Instagram
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Links