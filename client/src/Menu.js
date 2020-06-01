import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

import App from './App'

class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar dark
                        color="dark"
                        expand="md"
                        fixed="top"
                >
                    <NavbarBrand tag={App} to="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/about">About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/projects">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/links">Links</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu