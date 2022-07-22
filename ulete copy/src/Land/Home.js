import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import hero from '../img/heroImage.png';
import about from '..//img/aboutimage.png'
import react from 'react';



const Home = () => {
        const navigate = useNavigate();
   
        const handleClickLogin = event =>{
             navigate('/login'); 
        };
        const handleClickSignUp = event =>{
             navigate('/welcome');     
        };

    return ( 
        <div>
            <Navbar sticky="top" className="navbar mt-5">
                <Container display="fluid">
                    <Navbar.Brand href="#hero">Ulete</Navbar.Brand>
                    <Nav className="ml-auto">
                            <Nav.Link className="me-5 text-center fw-bold nav-item" href="#hero">Home</Nav.Link>
                            <Nav.Link className="me-5 text-center fw-bold nav-item" href="#about">About</Nav.Link>
                            <button onClick={handleClickLogin} id="login" className="btn btn-primary me-5 text-center fw-bold" type="button">Login</button>
                            <button onClick={handleClickSignUp} className="btn btn-secondary me-5 text-center fw-bold" type="button">SignUp</button>
                    </Nav>
                </Container>
            </Navbar>
            <div className="hero" id="hero">
                <Container display="fluid">
                    <div className="row align-items-center justify-content-center pt-4">
                        <div className="col-lg-6 d-flex flex-column">
                            <div className="land mx-auto d-block">
                                <div className="land-txt-head">
                                    <h1>The wellness and performance tracker for student-athletes</h1>
                                </div>
                                <div className="land-txt-body mt-3">
                                    <p>We guide you to achieve balance and excellence in your school work, your sport, and your overall performance.</p>
                                </div>
                                <div className="text-center text-lg-start">
                                    <Link to="/welcome" className="btn btn-primary-primary fw-bold text-light mt-3"><span>Get Started</span><i class="bi bi-arrow-right-circle-fill ms-2"></i></Link>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-6 hero-img">
                            <img src={hero} className="" alt="sports"/>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="about" id="about">
            <Container display="fluid">
                <div className="row align-items-center justify-content-center pt-3 text-light">
                    <div className="col-lg-6 about-img">
                        <img src={about} className="" alt="sports"/>
                    </div>
                    <div className="col-lg-6 d-flex flex-column">
                        <div className="land mx-auto d-block">
                            <div className="about-txt-head">
                                <h1>Ulete creates elite student athletes</h1>
                            </div>
                            <div className="about-txt-body mt-3">
                                <p>Are you ready to take your game to the next level? Ulete is a holistic wellness app for student athletes like you. We have a mood tracker, journals, and a curated development center to help you dominate all areas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/*Features Section Start*/}
            <div className="features py-5">
                    <Container display="flex">
                        <div className="circle-graphic"></div>
                        <div className="features-txt-head px-5">
                            <h1>We know finding balance can be hard. Here’s how we can make it a little easier.</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 px-5">
                                <div className="card ft-cards">
                                    {/*image here*/}
                                    <div className="card-body">
                                        <h5 className="card-title">Performance Trackers</h5>
                                        <p className="card-text">Our trackers keep you informed and reveal what factors contribute the most to your wellbeing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 px-5">
                                <div className="card ft-cards">
                                    {/*image here*/}
                                    <div className="card-body">
                                        <h5 className="card-title">Development Center</h5>
                                        <p className="card-text">It’s all about growth. We have curated articles, videos, and exercises to help develop your skills and learn.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 px-5">
                                <div className="card ft-cards">
                                    {/*image here*/}
                                    <div className="card-body">
                                        <h5 className="card-title">Daily Goals</h5>
                                        <p className="card-text">We empower you to hit your goals at a pace that’s comfortable for you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                {/*Features Section End*/}
        </div>
    </div>
     );
}
 
export default Home;