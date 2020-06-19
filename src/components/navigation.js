import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faAddressCard,
  faSortDown,
  faCog,
  faPlus,
  faHome,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";

function Navigation() {
  return (
    <Navbar>
      <Link className="homenav" to="/">
        <NavItem icon={<FontAwesomeIcon icon={faHome} />} />
      </Link>

      <NavItem className="homenav" icon={<FontAwesomeIcon icon={faSortDown} />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <div className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </div>
    );
  }
  return (
    <div className="dropdown">
      <Link to="/about">
        <DropdownItem
          leftIcon={<FontAwesomeIcon icon={faAddressBook} />}
          rightIcon="About"
        ></DropdownItem>
      </Link>

      <Link to="/contact">
        <DropdownItem
          leftIcon={<FontAwesomeIcon icon={faAddressCard} />}
          rightIcon="Contact"
        ></DropdownItem>
      </Link>

      <Link to="/theme">
        <DropdownItem
          leftIcon={<FontAwesomeIcon icon={faThLarge} />}
          rightIcon="Theme"
        ></DropdownItem>
      </Link>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <div className="icon-button" onClick={() => setOpen(!open)}>
        <div className="svg">{props.icon}</div>
      </div>

      {open && props.children}
    </li>
  );
}

export default Navigation;
