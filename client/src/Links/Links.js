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

class Links extends Component {
    render() {
        return (
            <Container fluid className="main">
                {/*<Menu/>*/}
                <Jumbotron>
                    <h1 className="display-4">Links</h1>
                </Jumbotron>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <h3>Social Media</h3>
                        {/*TODO: Add icons for each link*/}
                        <ListGroup>
                            <ListGroupItem className="list-social-media"
                                           tag="a"
                                           href="https://www.linkedin.com/in/levanavyang/">Linked In
                            </ListGroupItem>
                            <ListGroupItem className="list-social-media"
                                           tag="a"
                                           href="https://www.facebook.com/levana.yang.5">Facebook
                            </ListGroupItem>
                            <ListGroupItem className="list-social-media"
                                           tag="a"
                                           href="https://www.instagram.com/climili/">Instagram
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Links