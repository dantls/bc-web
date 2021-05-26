import React, { Component } from 'react';

import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl
} from 'react-bootstrap'

import logo from '../assets/logo.jpg';


export default class CustomNavBar extends Component {
  render() {
    return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">
        <img 
          src ={logo} 
          alt="DevicesControl"
          className="d-inline-block align-top"
          width="40"
          height="40"
        />
        
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/devices">Equipamentos</Nav.Link>
          <Nav.Link href="/brands">Marca</Nav.Link>
          <Nav.Link href="/models">Modelo</Nav.Link>
          <Nav.Link href="/users">Usuário</Nav.Link>
          <Nav.Link href="/types">Tipo de equipamento</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    )
  }
}
