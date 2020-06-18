import React from 'react';
import {Col, Row, Container, ButtonGroup, Button, CardGroup, Card, ListGroup, ListGroupItem} from 'reactstrap';

class CarRentalArticle extends React.Component {
    render () {
        return (
            <Container fluid className="project-article">
                <Row>
                    <Col className="project-article-content">
                        <h5>Description</h5>
                        <p>
                            A web app that simulates database interactions for a car rental website. Our team
                            created this app for our UBC databases final project.
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
                                    <ListGroupItem>
                                        PostgreSQL
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
                                    <ListGroupItem>
                                        Windows
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </CardGroup>
                        <h5>My Role</h5>
                        <p>
                            I wrote SQL database queries to post and fetch data from our Rentals
                            Database, and helped design the database based on "client"'s specifications.
                            I also assisted in platform set-up for our full stack project and played a large role in
                            debugging and testing queries and API calls for each step of the project.
                        </p>
                        <h5>Check It Out</h5>
                        <ButtonGroup>
                            <Button><a href="https://github.com/jessicachakmlee/dbproject">GitHub</a></Button>
                            <Button><a href="https://car-rental-304-2019.herokuapp.com/?fbclid=IwAR31nbmPOjpFA5xPKtE-1HItctb_apXa3WIiC5XtXgIOAODOkuFnao2i_nc">Live Page</a></Button>
                        </ButtonGroup>
                    </Col>
                    <Col xs="6" lg="4" className="project-article-image-car-rental" />
                </Row>
            </Container>
        )
    }
}
export default CarRentalArticle;