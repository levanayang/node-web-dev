import React from 'react'
import {
    Navbar,
    Nav,
    NavbarText,
    NavItem,
    Container
} from 'reactstrap';
import {NavLink} from 'react-router-dom';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubAlt, faLinkedin} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
    render() {
        return (
            <Container className="footer">
                <div className="footer-padding"/>
                <Navbar dark
                        color="dark"
                        expand="md"
                        className="fixed-bottom small"
                >
                    <NavbarText>Levana Yang {'\u00A9'} 2020</NavbarText>
                    <NavItem>
                        <NavLink to="about"
                                 exact={true}
                                 className="footer-menu">Contact</NavLink>
                    </NavItem>
                    <Nav className="ml-auto" navbar>
                        <a className="footer-icon"
                           href="https://github.com/levanayang">
                            <FontAwesomeIcon icon={faGithubAlt} size="3x" />
                        </a>
                        <a className="footer-icon"
                           href="https://www.linkedin.com/in/levanavyang/">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" />
                        </a>
                    </Nav>
                </Navbar>
            </Container>
        )
    }
}

export default Footer