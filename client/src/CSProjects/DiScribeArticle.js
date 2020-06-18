import React from 'react';
import {Col, Row, Container, ButtonGroup, Button, ListGroupItem,
    ListGroup, ListGroupItemText, Card, CardGroup} from 'reactstrap';

class DiScribeArticle extends React.Component {
    render () {
        return (
            <Container fluid className="project-article">
                <Row>
                    <Col xs="4" lg="4" className="project-article-image-discribe"/>
                    <Col className="project-article-content">
                        <h5>Description</h5>
                        <p>
                            This was a team project we made for our sponsor during our
                            Software Engineering Class at UBC.
                            <br/><br/>
                            <blockquote>
                                Introducing the Workplace Futurists' WebEx video meeting transcriber.
                                With this handy tool, never manually note-take meetings again!
                                See the Wiki for installation instructions and a record of our
                                documented journey.
                            </blockquote>
                        </p>
                        <h5>Tools and Languages</h5>
                        <CardGroup>
                            <Card>
                                <ListGroup>
                                    <ListGroupItem>
                                        C# .NET Core Platform
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Visual Studio 2019
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Twilio API
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Microsoft Graph API
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Windows 10
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                            <Card>
                                <ListGroup>
                                    <ListGroupItem>
                                        WebEx XML Meeting API
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Microsoft Azure App Services
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        GitLab and GitHub Version Control
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </CardGroup>
                        <h5>My Role</h5>
                        <p>
                            I was the overseer in setting up and authenticating our app's API keys with Twilio and
                            Microsoft Graph. I also played a main part in the backend architecture for dialing and
                            recording, handled budgeting, and helped write and edit our technical documents
                            for project management and design.
                        </p>
                        <h5>Highlights</h5>
                        <ListGroup className="project-article-discribe-highlights">
                            <ListGroupItem>
                                <ListGroupItemText>
                                    Our recording agent automatically attends WebEx meetings
                                    through email invitation
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemText>
                                    Utilizes Azure Speech to Text and Speaker Recognition APIs to identify meeting attendees
                                    and transcribe their conversations.
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemText>
                                    An email bot sends the transcribed meeting minutes to all the WebEx
                                    attendees for each particular meeting.
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemText>
                                    Integrates these events in a complete and automated pipeline that linearly
                                    coordinates these events.
                                </ListGroupItemText>
                            </ListGroupItem>
                        </ListGroup>
                        <h5>Check It Out</h5>
                        <ButtonGroup>
                            <Button><a href="https://github.com/Workplace-Futurists/DiScribe/wiki">Wiki</a></Button>
                            <Button><a href="https://github.com/Workplace-Futurists/DiScribe">GitHub</a></Button>
                            <Button><a href="https://discribe-cs319.azurewebsites.net/">*Live Page</a></Button>
                        </ButtonGroup>
                        <p className="small text-muted">*DiScribe requires setup before use.<br/>Live Page is not recommended.</p>
                    </Col>
                </Row>
            </Container>
                )
    }
}
export default DiScribeArticle;