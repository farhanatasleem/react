import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import ShowAndHide from './showAndHideTitle/showAndHideTitle';
import StopWatch from "./stopWatch/stopWatch";
import TodoList from "./todoList/TodoList";
import ProgressBar from "./progressbar/progressbar";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showandhide" element={<ShowAndHide />} />
        <Route path="/stopwatch" element={<StopWatch/>}/>
        <Route path="/todo" element={<TodoList/>}/>
        <Route path="/progressbar" element={<ProgressBar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
