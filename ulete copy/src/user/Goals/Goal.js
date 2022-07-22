import react, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';

const Goal = ({text, focus, goal, setDailyGoals, dailyGoals}) => {
    // events

    const deleteHandler = () =>{
        setDailyGoals(dailyGoals.filter((el) => el.id !== goal.id))
    };

    const completeHandler = () =>{
        setDailyGoals(dailyGoals.map((item) => {
            if(item.id === goal.id){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
        );
    }

    return ( 
        <div className="goals">
            <Container display="flex">
                <li className={`goals-item ${goal.completed ? "completed" : ''} ${goal.focus === "Sport" ? "sport-goal" : ''}`}>{text}</li>
                <button className="btn check-mark" onClick={completeHandler}><i class="bi bi-check-square-fill"></i></button>
                <button className="btn trash" onClick={deleteHandler} ><i class="bi bi-x-square-fill"></i></button>
            </Container>
        </div> 

     );
}
 
export default Goal;