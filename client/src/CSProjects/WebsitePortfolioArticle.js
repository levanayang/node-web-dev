import React from 'react';
import {Col, Row, Container, ButtonGroup, Button} from 'reactstrap';

class WebsitePortfolioArticle extends React.Component {
    render () {
        return (
            <Container fluid className="project-article">
                <Row>
                    <Col xs="6" lg="4" className="project-article-image-portfolio"/>
                    <Col className="project-article-content">
                        <h5>Description</h5>
                        <p>
                            write summary here
                        </p>
                        <h5>Tools and Languages</h5>
                        <ul>
                            <li>
                                list here
                            </li>
                        </ul>
                        <h5>My Role</h5>
                        <p>
                            explain my role
                        </p>
                        <h5>Highlights</h5>
                        <ul>
                            <li>feature 1</li>
                            <li>feature 2</li>
                        </ul>
                        <h5>Check It Out</h5>
                        <ButtonGroup>
                            <Button>GitHub</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default WebsitePortfolioArticle;