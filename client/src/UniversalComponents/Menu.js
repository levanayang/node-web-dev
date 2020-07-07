import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: false,
            navOpacity: "0.2"
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
            let opacity = window.scrollY < 100 ? "0.2" : "1.0";
            this.setState({navOpacity: opacity});
        });
    }

    render() {
        return (
            <div>
                <Navbar
                    expand="md"
                    fixed="top"
                    style={{
                        backgroundColor: `rgba(38,20,20,${this.state.navOpacity})`
                    }}
                >
                    <NavbarBrand tag={Link} to="/">Levana Yang</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/"
                                         className="inactive-menu"
                                         activeClassName="active-menu"
                                         exact={true}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/projects"
                                         className="inactive-menu"
                                         activeClassName="active-menu"
                                         exact={true}>Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about"
                                         className="inactive-menu"
                                         activeClassName="active-menu"
                                         exact={true}>About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/links"
                                         className="inactive-menu"
                                         activeClassName="active-menu"
                                         exact={true}>Links</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu