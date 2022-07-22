import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import react, { useState } from 'react';


import { Link, Routes, Route, useNavigate } from 'react-router-dom';


const QuizFP = ({name, setName}) => {
    const navigate = useNavigate("");

    const [nameError, setNameError] = useState("");

    const [lName, setLName] = useState("");    
    const [lNameError, setLNameError] = useState("");

    const [email, setEmail] = useState("");  
    const [emailError, setemailError] = useState("");

    const [uni, setUni] = useState("");  
    const [uniError, setUniError] = useState("");

    let formIsValid = false;

    const nameHandler = (e) =>{
        console.log(e.target.value);
        setName(e.target.value);
    };
    const lNameHandler = (e) =>{
        console.log(e.target.value);
        setLName(e.target.value);
    };
    const emailHandler = (e) =>{
        setEmail(e.target.value);
    };
    const uniHandler = (e) => {
        setUni(e.target.value);
    };

    const validate = () => {
        if (name.trim().length == 0){
            setNameError("Don't forget to write your name!");
            return false;
        } else {
            setNameError("")
            formIsValid = true;
        }

        if (lName.trim().length == 0){
            setLNameError("Don't forget to write your last name!");
            return false;
        } else {
            setLNameError("")
            formIsValid = true;
        }

        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setemailError("Your email is not valid, try again");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }


        if (uni.trim().length == 0) {
            setUniError("Don't forget to write your university!");
            return false;
        } else {
            setUniError("");
            formIsValid = true;
        }
    
        return formIsValid;

    };

    const handleNext = (e) =>{

        if (formIsValid){
            navigate('/survey');
        }
        e.preventDefault();
        validate();
      
    };


    return ( 
        <div className="q-second-page">
            <Container display="flex">
                {/*The progress bar goes here*/}
                <div className="prog-bar">
                </div>

                <div className="form-title">
                    <h4 className="fw-bold">Your Personal Information</h4>
                    <p>We want to know you a little better!</p>
                </div>

                {/*Form start*/}
                <Form>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <Form.Group className="mb-3" controlId="form.Name">
                                <Form.Label>What's your first name?</Form.Label>
                                <Form.Control onChange={nameHandler}  value={name} type="text" placeholder="Jane" />
                                <small id="nameHelp" className="text-danger form-text"> {nameError}</small>
                            </Form.Group>
                        </div>
                        <div className="col-lg-6">
                            <Form.Group className="mb-3" controlId="form.Name">
                                <Form.Label>What's your last name?</Form.Label>
                                <Form.Control onChange={lNameHandler} value={lName} type="text" placeholder="Doe" />
                                <small id="lnameHelp" className="text-danger form-text"> {lNameError}</small>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                    <Form.Group className="mb-3" controlId="form.Email">
                        <Form.Label>What email do you use often?</Form.Label>
                        <Form.Control onChange={emailHandler} value={email} type="email" placeholder="name@example.com" />
                        <small id="emailHelp" className="text-danger form-text"> {emailError}</small>
                    </Form.Group>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <Form.Group className="mb-3" controlId="form.Age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" min="18" placeholder="18" />
                            </Form.Group>
                        </div>
                        <div className="col-lg-4">
                            <Form.Group className="mb-3" controlId="form.Height">
                                <Form.Label>Height (cm)</Form.Label>
                                <Form.Control type="number" placeholder="cm" min="50" />
                            </Form.Group>
                        </div>
                        <div className="col-lg-4">
                            <Form.Group className="mb-3" controlId="form.Weight">
                                <Form.Label>Weight (lbs)</Form.Label>
                                <Form.Control type="number" min="100" placeholder="lbs" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <Form.Group className="mb-3" controlId="form.Uni">
                            <Form.Label>What University do you play for?</Form.Label>
                            <Form.Control onChange={uniHandler} type="text" placeholder="University of Ottawa" />
                            <small id="uniHelp" className="text-danger form-text"> {uniError}</small>
                        </Form.Group>
                    </div>
                </Form>
                {/*Form End*/}

                {/*Back/Next btns*/}
                <div className="row align-items-center justify-content-start">
                    <div className="col-lg-6">
                        <Link to="/welcome" className="btn btn-secondary text-center fw-bold"> Back </Link>
                    </div>
                    <div className="col-lg-6">
                        <button onClick={handleNext} className="btn btn-primary text-center fw-bold"> Next </button>
                    </div>
                </div>
            </Container>
        </div>


     );
}
 
export default QuizFP;