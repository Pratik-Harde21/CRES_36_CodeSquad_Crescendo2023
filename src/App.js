
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import Courses from "./components/Courses";
import Feedback from "./components/Feedback";
import QuizMain from "./components/QuizMain";
import { useState } from "react";
import axios from "axios";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {

  const [questions, setQuestions] = useState();
    const [name, setName] = useState();
    const [score, setScore] = useState(0);
  
    const fetchQuestions = async (category = "", difficulty = "") => {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${
          category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      );
  
      setQuestions(data.results);
    };

  return (
    <div className="App">
      <Router>
        <div className=''>
          <Navbar/>
        </div>
        
        <div>
        <Routes>
        <Route path="/main" exact element={<Main/>}/>
        <Route path="/aboutus" exact element={<AboutUs/>}/>
        <Route path="/courses" exact element={<Courses/>}/>
        <Route path="/feedback" exact element={<Feedback/>}/>
        <Route path="/quiz_main" exact element={<QuizMain/>}/>
        <Route path="/quiz_main/home" exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}/> 
        <Route path="/quiz_main/quiz" exact element={<Quiz name={name}
            questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />}/>
        <Route path="/quiz_main/result" exact element={<Result name={name} score={score} />}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
