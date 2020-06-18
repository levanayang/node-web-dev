import React from 'react';
import {Col, Row, Container, ButtonGroup, Button, CardGroup, Card, ListGroup, ListGroupItem} from 'reactstrap';

class WebsitePortfolioArticle extends React.Component {
    render () {
        return (
            <Container fluid className="project-article">
                <Row>
                    <Col xs="6" lg="4" className="project-article-image-portfolio"/>
                    <Col className="project-article-content">
                        <h5>Description</h5>
                        <p>
                            The personal website platform you are currently viewing. By far the most
                            creative and free project I've had the pleasure of working on.
                        </p>
                        <h5>Tools and Languages</h5>
                        <CardGroup>
                            <Card>
                                <ListGroup>
                                    <ListGroupItem>
                                        Javascript
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Node.js
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        React
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Express
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                            <Card>
                                <ListGroup>
                                    <ListGroupItem>
                                        HTML
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        CSS
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Heroku CLI
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        GitHub
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </CardGroup>
                        <h5>Check Out the Code</h5>
                        <ButtonGroup>
                            <Button><a href="https://github.com/levanayang/node-web-dev">GitHub</a></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default WebsitePortfolioArticle;