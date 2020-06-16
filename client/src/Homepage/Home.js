// home page
import React, { Component } from 'react';
import {Container, Jumbotron} from "reactstrap";
import Resume from './Resume';

class Home extends Component {
    render() {
        return (
            <Container fluid className="main">
                <Jumbotron className="main-jumbotron">
                    <h1 className="display-4">Levana's Portfolio</h1>
                    <p className="lead">Welcome to my site!</p>
                </Jumbotron>
                <Resume src={"https://docs.google.com/document/d/e/2PACX-1vRAatOYzlULG_9rKJ6R6Uj3ugYbT-2KVuNeqxfLNsCn40kns9roG22W63oLhGrX5Hrtd01IUQbrzJ0y/pub?embedded=true"}/>
            </Container>
        );
    }
}

export default Home
