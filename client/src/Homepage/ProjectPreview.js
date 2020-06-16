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
import {NavLink} from 'react-router-dom';

const ProjectPreview = (props) => {
    return (
        <Container className="project-previews">
            <CardDeck>
                <Card>
                    <CardHeader className="project-preview-header">
                        <NavLink to="/projects"
                                 className="project-preview-header-link"
                                 exact={true}>
                            <strong>Car Rental Website</strong>
                        </NavLink>
                    </CardHeader>
                    <CardBody>
                        <CardText className="text-left">
                            A web app made to simulate a car rental website to practice using database queries.
                        </CardText>
                    </CardBody>
                    <CardImg top width="100%"
                             src= {`${process.env.PUBLIC_URL}/images/car_rental_preview.jpg`}
                             alt="Mock Car Rentals"
                    />
                    <CardFooter className="project-preview-footer">
                        <ButtonGroup className="project-preview-button-group">
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
                        <NavLink to="/projects"
                                 className="project-preview-header-link"
                                 exact={true}>
                            <strong>DiScribe</strong>
                        </NavLink>
                    </CardHeader>
                    <CardBody>
                        <CardText className="text-left">
                            A recording and transcription app for WebEx meetings.
                        </CardText>
                    </CardBody>
                    <CardImg top width="100%"
                             src= {`${process.env.PUBLIC_URL}/images/discribe_wiki_preview.jpg`}
                             alt="Mock Car Rentals"
                    />
                    <CardImg top width="100%"
                             src= {`${process.env.PUBLIC_URL}/images/discribe_preview.jpg`}
                             alt="Mock Car Rentals"
                    />
                    <CardFooter className="project-preview-footer">
                        <ButtonGroup className="project-preview-button-group">
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
                                >Live Site</a>
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </CardDeck>
        </Container>
    )

}
export default ProjectPreview;