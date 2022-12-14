import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
     return (
           
               <Navbar bg="primary"  expand="lg">
                    <Container>
                         <Navbar.Brand href="#">Quiz Hunter</Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav className="d-flex justify-content-end  w-100">
                                   <Link to="/home" className="nav-link">Home</Link>
                                   <Link to="/statistics" className="nav-link">Statistics</Link>
                                   <Link to="/blog" className="nav-link">Blog</Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
     );
};

export default Header;