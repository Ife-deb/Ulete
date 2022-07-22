import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

const QuizTP = () => {

    const[text, setText] = useState("")


    return ( 
        <div className="q-second-page">
        <Container display="flex">
            <div className="prog-bar">
                {/*The progress bar goes here*/}
            </div>

            <div className="form-title">
                <h4 className="fw-bold">Thank You!</h4>
                <p>Your journey awaits</p>
            </div>

            
            {/*Back/Next btns*/}
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-6">
                    <Link to="/questions" className="btn btn-secondary text-center fw-bold"> Back </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="/home" className="btn btn-primary text-center fw-bold"> Done </Link>
                </div>
            </div>
        </Container>
        </div>

     );
}
 
export default QuizTP;