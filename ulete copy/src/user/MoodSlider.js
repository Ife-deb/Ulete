import react, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

const MoodSlider = ({setMood, mood, moods, moodName, setMoodName, page, setPage}) => {

    const navigate = useNavigate();    

    const handleChange = (e) =>{
        const val = e.target.value; 
        if (val < 20) {
            setMood(moods.angry);
            setMoodName("angry");
        } else if (val >= 20 && val < 40) {
            setMood(moods.sad);
            setMoodName("sad");

        } else if (val >= 40 && val < 60) {
            setMood(moods.neutral);
            setMoodName("neutral");

        } else if (val >= 60 && val < 80) {
            setMood(moods.happy); 
            setMoodName("happy");

        } else if (val > 80) {
            setMood(moods.excited);
            setMoodName("excited");

        }
    };

    function goNextPage(){
        setPage(page => page + 1);
    }
    
    return (  

        <div>
            
                <p className='fw-bold'>How are you feeling today?</p>
            <div className="slider-content">
                <div className="moods">
                    <img src={mood} alt="mood"></img>
                </div>
                <div className="track-class">
                    <input type="range" list="stops" onChange={handleChange} min="1" max="100" />
                </div>
                <datalist id="stops">
                    <option value="really sad" label="😔"></option>
                    <option value="sad" label="😔"></option>
                    <option value="neutral" label="😐"></option>
                    <option value="happy" label="😄"></option>
                    <option value="really happy" label="😔"></option>
                </datalist>
            </div>
            <div className="next-btn">
                <button onClick={goNextPage} className='btn btn-primary'>Next</button>
            </div>
        </div>

    );
}
 
export default MoodSlider;