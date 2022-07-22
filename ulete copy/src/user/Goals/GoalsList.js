import react, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Goal from './Goal';



const GoalsList = ({dailyGoals, setDailyGoals}) => {
    return ( 
        <div className="goals-list">
            <Container display="flex">
                <ul className="goals-list">
                    {dailyGoals.map((goal) => (
                        <Goal goal={goal} text={goal.text} key={goal.id} focus={goal.focus} setDailyGoals={setDailyGoals} dailyGoals={dailyGoals} />
                    ))}
                    
                </ul>
            </Container>
        </div>
     );
}
 
export default GoalsList; 