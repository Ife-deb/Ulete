import react, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import GoalsList from './GoalsList';
import ReactDOM from 'react-dom';
import UserNavBar from '../UserNavBar';

const DailyGoals = ({setInputText, setDailyGoals, dailyGoals, inputText, focusArea, setFocusArea}) => {

    const [errorMessage, setErrorMessage] = useState('');
    const [defFocusArea, setdefFocusArea] = useState("default");

    {/* Set error mesages fir if the inputtext is empty and they try to submit or if they have not seclted a focus are*/}


    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
        
    };

    const optionsHandler = (e) =>{
        console.log(e.target.value);
        setFocusArea(e.target.value);
    };

    const validate = (e) =>{
        
        if (inputText.trim().length == 0){
            setErrorMessage("Hey, you forgot to write a goal!");
            return false;

        } else {
            return true;
        }
       
    };

    const submitGoalHandler = (e) =>{
        e.preventDefault();

        if (validate() == true){
            setDailyGoals([
                ...dailyGoals, {text: inputText, completed: false, focus: focusArea, id: Math.random() * 1000   }
            ]);
            setInputText("");
            setFocusArea("default");
            setErrorMessage("");
        }
        
    };

    return (
        <div className="daily-goals">
            <UserNavBar />
            <Container display="flex">
                <div className="daily-goals-txt mt-5">
                    <div className="goals-title">
                        <h2>Get Closer to Your Goals!</h2>
                    </div>
                    <div className="type-bar mt-5"> 
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <p>Goal:</p>
                                <input value={inputText} onChange={inputTextHandler} type="text" className="goals-input" placeholder="Type Goal here"></input>
                                <p className="error">{errorMessage}</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="select select-bar">
                                    <p>Focus Area:</p>
                                    <select value={focusArea} name="goals" className="set-area" onChange={optionsHandler}>
                                        <option value="default" disabled>*Choose a focus area</option>
                                        <option value="Sport">My Sport skills</option>
                                        <option value="Personal Life">My Personal Life</option>
                                        <option value="Academics">My Academics</option>
                                    </select>
                                    <button onClick={submitGoalHandler} className="goals-btn btn" type="submit"><i class="bi bi-plus-square-fill"></i></button>
                                    
                                </div>
                            </div>
                        </div>
                    </form>
                    </div>
                    <div className="list">
                        <GoalsList dailyGoals={dailyGoals} setDailyGoals={setDailyGoals} />
                    </div>
                </div>
            </Container>
        </div>
      );
}
 
export default DailyGoals; 