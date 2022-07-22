import react from 'react';

import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Footer';
import Header from './Header';
import About from './Land/About';
import Home from './Land/Home';
import QuizFP from './NewUser/QuizFP';
import QuizSP from './NewUser/QuizSP';
import QuizTP from './NewUser/QuizTP';
import QuizLP from './NewUser/QuizLP';
import Login from './Login';
import UserHome from './user/UserHome';
import DailyGoals from './user/Goals/DailyGoals';

function App() { 

  const [name, setName] = useState("");
  const [inputText, setInputText] = useState("");
  const [dailyGoals, setDailyGoals] = useState([]);
  const [focusArea, setFocusArea] = useState("");



  return (

    <Router>
      <div className="App">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/welcome" element={<QuizFP />} />
              <Route path="/questions" element={<QuizSP name={name} setName={setName} />} />
              <Route path="/survey" element={<QuizTP />} />
              <Route path="/confirm" element={<QuizLP />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<UserHome name={name} setName={setName} />} />
              <Route path="/DailyGoals" element={<DailyGoals focusArea={focusArea} setFocusArea={setFocusArea} setDailyGoals={setDailyGoals} dailyGoals={dailyGoals} setInputText={setInputText} inputText ={inputText} />} />
            </Routes>
          </div>

      </div>
    </Router>

  );

}

export default App;
