// a page to show off past cs projects

import React, { Component } from 'react'
import {Col, Container, Jumbotron, ListGroup, ListGroupItem, Row} from "reactstrap";

import DiScribeArticle from "./DiScribeArticle";
import CarRentalArticle from "./CarRentalArticle";
import WebsitePortfolioArticle from "./WebsitePortfolioArticle";

class Projects extends Component {
    render() {
        return (
            <Container fluid className="main">
                {/*<Menu/>*/}
                <Jumbotron fluid className="projects-jumbotron">
                    <h1 className="display-4">Projects</h1>
                </Jumbotron>
                <DiScribeArticle />
                <CarRentalArticle />
                <WebsitePortfolioArticle />
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        {/*TODO: add more info on each project: title, summary, groups*/}
                        <ListGroup>
                            <ListGroupItem className="list-cs-projects"
                                           tag="a"
                                           href="https://github.com/Workplace-Futurists/DiScribe/wiki">DiScribe
                            </ListGroupItem>
                            <ListGroupItem className="list-cs-projects"
                                           tag="a"
                                           href="https://car-rental-304-2019.herokuapp.com/?fbclid=IwAR31nbmPOjpFA5xPKtE-1HItctb_apXa3WIiC5XtXgIOAODOkuFnao2i_nc">Car Rental Website
                            </ListGroupItem>
                            <ListGroupItem className="list-cs-projects"
                                           tag="a"
                                           href="https://github.com/jessicachakmlee/dbproject">Car Rental GitHub
                            </ListGroupItem>
                            <ListGroupItem className="list-cs-projects"
                                           tag="a"
                                           href="https://github.com/levanayang/node-web-dev">My Portfolio Site
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Projects