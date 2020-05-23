import React from "react";
import {Row} from 'reactstrap';

// a Simple Component for my resume
class Resume extends React.Component {
    render() {
        return (
            <Row className="resume">
                <iframe title={"Resume"}
                        src={this.props.src}
                        scrolling="no"
                        align="center"
                />
            </Row>
        );
    }
}

export default Resume;