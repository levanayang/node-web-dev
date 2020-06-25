import React from 'react'
import {
    Container,
    CardDeck,
    Card,
    ButtonGroup,
    Button,
    CardImg,
    CardFooter,
    CardText,
    CardBody,
    CardHeader
} from "reactstrap";
import {Link} from 'react-router-dom';

// Images
import discribe_preview from "../discribe_preview.JPG"
import discribe_wiki_preview from "../discribe_wiki_preview.JPG"
import car_rental_preview from "../car_rental_preview.JPG"

const ProjectPreview = (props) => {
    return (
        <Container className="project-previews">
            <CardDeck>
                <Card>
                    <CardHeader className="project-preview-header">
                        <Link to="/projects"
                              className="project-preview-header-link"
                              exact={true}>
                            <strong>Car Rental Website</strong>
                        </Link>
                    </CardHeader>
                    <CardBody>
                        <CardText className="text-left">
                            A web app made to simulate a car rental website to practice using database queries.
                        </CardText>
                    </CardBody>
                    <CardImg top width="100%"
                             src= {car_rental_preview}
                             alt="Mock Car Rentals"
                             className="card-image"

                    />
                    <CardFooter className="project-preview-footer">
                        <ButtonGroup className="project-preview-button-group">
                            <Button color="info">
                                <Link to="/projects"
                                      className="project-preview-header-link"
                                      exact={true}
                                >Project Page</Link>
                            </Button>
                            <Button>
                                <a href="https://car-rental-304-2019.herokuapp.com/"
                                   className="project-preview-link"
                                >Live Site</a>
                            </Button>
                            <Button>
                                <a href="https://github.com/jessicachakmlee/dbproject"
                                   className="project-preview-link"
                                >Github</a>
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader className="project-preview-header">
                        <Link to="/projects"
                              className="project-preview-header-link"
                              exact={true}
                        >
                            <strong>DiScribe</strong>
                        </Link>
                    </CardHeader>
                    <CardBody>
                        <CardText className="text-left">
                            A recording and transcription app for WebEx meetings.
                        </CardText>
                    </CardBody>
                    <CardImg top width="100%"
                             src= {discribe_wiki_preview}
                             alt="DiScribe project wiki"
                             className="card-image"
                    />
                    <CardImg top width="100%"
                             src= {discribe_preview}
                             alt="DiScribe project site"
                             className="card-image"
                    />
                    <CardFooter className="project-preview-footer">
                        <ButtonGroup className="project-preview-button-group">
                            <Button color="info">
                                <Link to="/projects"
                                      className="project-preview-header-link"
                                      exact={true}
                                >Project Page</Link>
                            </Button>
                            <Button>
                                <a href="https://github.com/Workplace-Futurists/DiScribe/wiki"
                                   className="project-preview-link"
                                >Wiki</a>
                            </Button>
                            <Button>
                                <a href="https://github.com/Workplace-Futurists/DiScribe"
                                   className="project-preview-link"
                                >Github</a>
                            </Button>
                            <Button>
                                <a href="https://discribe-cs319.azurewebsites.net/"
                                   className="project-preview-link"
                                >DiScribe Web</a>
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </CardDeck>
        </Container>
    )

}
export default ProjectPreview;