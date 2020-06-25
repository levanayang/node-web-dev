// a page for to learn more about me (blog) and how to contact me
import React, { Component } from 'react'
import {Container, Jumbotron, Col, Row, Card, CardBody, CardHeader, CardImg} from "reactstrap";

import ContactForm from "./ContactForm";
import me_profile from "../img/me_profile.jpg"

class About extends Component {
    render() {
        return (
            <Container fluid className="main">
                {/*<Menu/>*/}
                <Jumbotron fluid className="about-jumbotron">
                    <h1 className="display-4">About Me</h1>
                </Jumbotron>
                <Row>
                    <Col xs="2">
                        <Card>
                            <CardImg top
                                     width="100%"
                                     src= {me_profile}
                                     alt="my photo"
                                     className="card-image">
                            </CardImg>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader className="text-left"><h1>Pleased to meet you.</h1></CardHeader>
                            <CardBody className="text-justify">
                                My name is Levana and I'm a recent grad from the University of British
                                Columbia. Throughout my school life I have always been interested in natural systems
                                and the biology of animals, but school also nurtured my passion for math,
                                physics, and logical thinking. As a result, I started my education at Kwantlen
                                Polytechnic University, where I earned my Associate's Degree in Biology. Later, I
                                transferred to UBC where I decided to major in Computer Science and Microbiology &
                                Immunology. UBC was where I was gripped by the art of software development. I have a deep
                                interest in data science and bioinformatics but I discovered that I also loved writing code
                                and learning how systems work. Currently, I am dedicating myself to improving my
                                programming skills and searching for a job opportunities that offer real world experience.
                                I hope to one day return to school to pursue further education in bioinformatics or fine
                                arts but for now I am preoccupied with exploring the world for intelligent design. I hope
                                you enjoyed learning a bit about me, and thank you for taking the time to read about my long
                                journey so far.

                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4" lg="4"><ContactForm/></Col>
                </Row>
            </Container>
        );
    }
}

export default About