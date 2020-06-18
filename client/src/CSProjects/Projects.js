// a page to show off past cs projects

import React, { Component } from 'react'
import {Container, Jumbotron} from "reactstrap";

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
            </Container>
        );
    }
}

export default Projects