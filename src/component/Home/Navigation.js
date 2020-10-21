import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import logo from './film-roll.png'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        
      <Navbar expand="lg">
        <div className="container-fluid">
      <Navbar.Brand href="#home"><Link to='/'>
        <img className="mr-2" style={{width:'30px',height:'30px'}} src={logo} alt="" srcset=""/>
        ශ්‍රී  CINEMA</Link></Navbar.Brand>
       
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="fas fa-bars"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Movie</Nav.Link>
          <Nav.Link href="#home">Tv show</Nav.Link>
          <Nav.Link href="#link">Drama</Nav.Link>
          <Nav.Link href="#link">My Collection</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
      <div className="navbar-left">
        <div className="right-nav">
      <span className="fa fa-search"></span>
        <span className="fa fa-shopping-cart"></span>
        <span className="far fa-bell"></span>
        </div>
        <div className="profile">
        <span className="user">
          R
        </span>
        </div>
      </div>
      </div>
    </Navbar>
        
    )
}

export default Navigation
