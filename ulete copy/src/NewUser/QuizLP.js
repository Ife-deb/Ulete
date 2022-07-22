import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

const QuizLP = () => {
    return ( 
        <div className="q-first-page">
        <Container display="flex">
            <div className="prog-bar">
                {/*The progress bar goes here*/}
            </div>

            <div className="form-title">
                <h4 className="fw-bold">What are your goals?</h4>
                <p>Select all areas you need to improve to make you a better student-athlete.</p>
            </div>

             {/*goals selection*/}



            {/*Back/Next btns*/}
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-6">
                    <Link to="/welcome" className="btn btn-secondary text-center fw-bold"> Back </Link>
                </div>
                <div className="col-lg-6">
                    <Link to="/goals" className="btn btn-primary text-center fw-bold"> Next </Link>
                </div>
            </div>
        </Container>
        </div>

     );
}
 
export default QuizLP;