import react, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import MoodSlider from './MoodSlider';
import PersonalLife from './PersonalLife';
import Journal from './Journal';

const FormSwitcherUser = ({setMood, mood, moods, page, setPage}) => {


    switch (page) {
        case 0:
          return <MoodSlider page={page} setPage={setPage} moods={moods} mood={mood} setMood={setMood}/>;
        case 1:
          return <PersonalLife />;
         case 2:
           return <Journal />;
         default:
           return <MoodSlider />;
      }

      const handleSubmit =()=> {
        setPage(page + 1);
      };

    return (
        <div>
            <div>{FormSwitcherUser()}</div>
            <button onClick={handleSubmit}>NExt</button>
        </div>
      );
}
 
export default FormSwitcherUser;