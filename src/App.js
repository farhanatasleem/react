import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import ShowAndHide from './showAndHideTitle/showAndHideTitle';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showandhide" element={<ShowAndHide />} />
      </Routes>
    </Router>
  );
}

export default App;
