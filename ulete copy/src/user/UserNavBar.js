import react, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';

const UserNavBar = () => {
    return ( 
        <Navbar sticky="top" className="navbar mt-5">
            <Container display="fluid">
                <Navbar.Brand href="#hero">Ulete</Navbar.Brand>
                <Nav className="ml-auto">
                        <Nav.Link className="me-5 text-center fw-bold nav-item" href="#hero">Home</Nav.Link>
                        <Nav.Link className="me-5 text-cente fw-bold nav-item" href="#about">Goals</Nav.Link>
                        <Nav.Link className="me-5 text-cente fw-bold nav-item" href="#about">Trackers</Nav.Link>
                        <Nav.Link className="me-5 text-cente fw-bold nav-item" href="#about">Resources</Nav.Link>
                        <i class="bi bi-person-circle "></i>
                </Nav>
            </Container>
        </Navbar>
     );
}
 
export default UserNavBar;