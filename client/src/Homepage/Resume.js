import React from "react";
import {Row, Button, Container, Collapse} from 'reactstrap';

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
            <Container>
                <Button className="show-resume"
                        color="dark"
                        onClick={this.toggle}
                        style={{ marginBottom: '1rem' }}>
                    <h2>My Resume</h2>
                </Button>
                <Collapse isOpen={this.state.visible}>
                    <Row className="resume">
                        <iframe title={"Resume"}
                                src={this.props.src}
                                scrolling="no"
                                align="center"/>
                    </Row>
                </Collapse>
            </Container>
        );
    }
}

export default Resume;