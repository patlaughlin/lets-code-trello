import React, {Component} from 'react';
import {Navbar, Nav, MenuItem, Button, NavItem, NavDropdown} from 'react-bootstrap';
import Card from '../components/Card';

class Toolbar extends Component {
  render() {
    return (
      <Navbar className="toolbar">
        <Navbar.Header>
          <Navbar.Brand>Smello</Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Toolbar;
