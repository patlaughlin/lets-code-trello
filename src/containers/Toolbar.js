import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

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
