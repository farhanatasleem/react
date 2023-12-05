import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import ShowAndHide from './showAndHideTitle/showAndHideTitle';
import StopWatch from "./stopWatch/stopWatch";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showandhide" element={<ShowAndHide />} />
        <Route path="/stopwatch" element={<StopWatch/>}/>
      </Routes>
    </Router>
  );
}

export default App;
