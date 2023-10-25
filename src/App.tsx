import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import SetView from './SetView';


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/set/:setId" element={<SetView />} />
        </Routes>
    </Router>
  );
}

export default App;
