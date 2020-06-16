import React from "react";
import {Col, Button, Container, Collapse} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogleDrive} from "@fortawesome/free-brands-svg-icons";

// a Simple Component for my resume
class Resume extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
            this.setState({visible: !this.state.visible})
    }

    render() {
        return (
            <Container fluid={true} className="resume-container">
                <Col xs="auto" className="show-resume">
                    <Button
                            color="dark"
                            onClick={this.toggle}
                            style={{ marginBottom: '1rem' }}>
                        <h2>My Resume</h2>
                    </Button>
                </Col>
                <Collapse isOpen={this.state.visible}>
                    <Col xs="auto" className="resume">
                        <iframe title={"Resume"}
                                src={this.props.src}
                                scrolling="no"
                                align="center"
                        />
                    </Col>
                </Collapse>
                <a href={`https://drive.google.com/file/d/1sM2RR4cUv0nIbnZDIojeiUamu-uMyr0y/view?usp=sharing`}
                   download="levana_yang_resume.pdf"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    <Button>
                        <FontAwesomeIcon className="resume-download-icon"
                                         icon={faGoogleDrive}
                                         size="2x" />
                        <h6>Download</h6>
                    </Button>
                </a>
            </Container>
        );
    }
}

export default Resume;