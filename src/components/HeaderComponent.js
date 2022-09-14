import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(true)
    
    return (
        <Navbar
            sticky="top"
            expand="md"
        >
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="">Villagers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="">Fish</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="">Bugs</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}