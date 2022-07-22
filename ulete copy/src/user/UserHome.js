import react, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import {faPersonRunning} from '@fortawesome/free-solid-svg-icons'
import UserNavBar from './UserNavBar';
import MoodSlider from './MoodSlider';
import PersonalLife from './PersonalLife';
import CommentBox from './journal/CommentBox';

const UserHome = ({name, setName}) => {
    const angry = require('../img/angry.png');
    const sad = require('../img/sad.png');
    const neutral = require('../img/neutral.png');
    const happy = require('../img/happy.png'); 
    const excited = require('../img/excited.png');

    const [page, setPage] = useState(1);


    const moods = {angry, sad, neutral, happy, excited}; 
    const [mood, setMood] = useState(moods.neutral);
    const[moodName, setMoodName] = useState("");

      
    const[factor, setFactor]=useState("ph");

    return (  
        <div className="user-home">
            <UserNavBar />
            <Container display="flex">
                <div className="welcome-txt mt-4 mb-5">
                <span><h1>Welcome back, <b>{name}</b></h1></span>
                </div>

                <div className="check-in p-5">
                     <div className="component-div">
                        <div className='display'>
                            {page === 1 && <MoodSlider moodName={moodName} setMoodName={setMoodName} page={page} setPage={setPage} moods={moods} mood={mood} setMood={setMood}/> }
                            {page === 2 && <PersonalLife factor={factor} setFactor={setFactor} moodName={moodName} page={page} setPage={setPage}/> }
                            {page === 3 && <CommentBox moodName={moodName} factor={factor} page={page} setPage={setPage} />}
                        </div>
                    </div> 
                </div>
            </Container>
        </div>
     );
}
 
export default UserHome;