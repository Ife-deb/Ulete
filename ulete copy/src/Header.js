import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';


const Header = () => {

     const navigate = useNavigate();

     const handleClickLogin = event =>{
          navigate('/quiz');
     };
     const handleClickSignUp = event =>{
          navigate('/quiz');     
     };

    return (  
     <Navbar sticky="top" className="navbar mt-5">
          <Container display="fluid">
               <Navbar.Brand href="#hero">Ulete</Navbar.Brand>
               <Nav className="ml-auto">
                    <Nav.Link className="me-5 text-center fw-bold nav-item" href="#hero">Home</Nav.Link>
                    <Nav.Link className="me-5 text-cente fw-bold nav-item" href="#about">About</Nav.Link>
                    <button onClick={handleClickSignUp} id="login" className="btn btn-primary me-5 text-center fw-bold" type="button">Login</button>
                    <button onClick={handleClickSignUp} className="btn btn-secondary me-5 text-center fw-bold" type="button">SignUp</button>
               </Nav>

          </Container>
     </Navbar>
     );
}
 
export default Header;