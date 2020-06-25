// home page
import React, { Component } from 'react';
import {Container, Jumbotron} from "reactstrap";
import Resume from './Resume';
import ProjectPreview from "../ProjectPreview";
import {NavLink} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <Container fluid className="main">
                <Jumbotron fluid className="main-jumbotron">
                    <h1 className="display-4">Levana's Portfolio</h1>
                    <p className="lead">Welcome to my site!</p>
                </Jumbotron>
                <Resume src={"https://docs.google.com/document/d/e/2PACX-1vRAatOYzlULG_9rKJ6R6Uj3ugYbT-2KVuNeqxfLNsCn40kns9roG22W63oLhGrX5Hrtd01IUQbrzJ0y/pub?embedded=true"}/>
                <NavLink to="/projects"
                         className="project-preview-projects-link"
                         exact={true}>
                    <h1>Projects</h1>
                </NavLink>
                <ProjectPreview />
            </Container>
        );
    }
}

export default Home
