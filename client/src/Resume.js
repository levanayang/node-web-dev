import React from "react";
import { Row, Col, Table } from 'reactstrap';

// a Simple Component for my resume
const Resume = (props) => {
    const { data } = props;

    if (!data)
        return <div></div>;
    return (
        <Row className="resume">
            <Col sm="12" md={{ size: 4, offset: 4 }}>
                <h2>Resume</h2>
                <img src="" alt=""/>
                <span></span>
                <span></span>
                <Table>
                    <tbody></tbody>
                </Table>
            </Col>
        </Row>
    );
};

export default Resume;