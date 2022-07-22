import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import react from 'react';

import { useState } from 'react';

import { Link, Routes, Route, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");
    let formIsValid = false;

    const handleValidation = (event) => {
        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        formIsValid = false;
        setemailError("Email Not Valid");
        return false;
        } else {
        setemailError("");
        formIsValid = true;
        }

        if (!password.match(/^[a-zA-Z]{8,22}$/)) {
        formIsValid = false;
        setpasswordError("Only Letters and length must be min 8 Chracters and Max 22 Chracters");
        return false;
        } else {
        setpasswordError("");
        formIsValid = true;
        }

        return formIsValid;
    };

    const loginSubmit = (e) => {
        if (formIsValid){
            navigate('/home');
        }
        e.preventDefault();
        handleValidation();
        
    };

    return (
        <div className="login">
            <Container display="flex">
                <div className="row">
                    <div className="col-lg-6 form-section" >
                        <h1 className="fw-bold">Welcome Back</h1>
                        <p className="mb-5">Hey, enter your details to continue</p>
                        <form id="loginform" onSubmit={loginSubmit}>
                            <div className="form-group mb-3">
                                <label>Email</label>
                                <input type="email" className="form-control" id="EmailInput" name="EmailInput" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)}/>
                                <small id="emailHelp" className="text-danger form-text"> {emailError}</small>
                            </div>
                            <div className="form-group mb-3">
                                <label>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                                <small id="passworderror" className="text-danger form-text"> {passwordError} </small>
                            </div>
                            <button type="submit" className="btn btn-primary login-btn"> Login </button>
                        </form>
                    </div>

                    <div className="col-lg-6">
                        <h1>Image</h1>
                    </div>
                </div>
            </Container>
        </div>

      );
}
 
export default Login;