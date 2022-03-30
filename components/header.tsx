import React from 'react';
import Image from 'next/image';
import logo from '../assest/images/uxbertlabs-logo.png'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import Link from "next/link";

/*
 * This function is the Header component
 *
 */
const Header = () => {

    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const [isOpen, setIsOpen] = React.useState(false);

    // Menu List
    const MENU = [{text : "Services"}, {text : "Training"}, {text : "Usability"}, {text : "Articles"}, {text : "About"}, {text : "Careers"}, {text : "Contact"}];

    const createNavItem = ({ href, text, className }) => (
        <NavItem key={text}>
            <NavLink href="#" className={className}>{text}</NavLink>
        </NavItem>
    );

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (

        <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Uxbert</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse className="justify-content-end" isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {MENU.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    );
}

export default Header;