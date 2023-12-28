import './App.css';
import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/projects' element={<Projects />}/>
      </Routes>
    </Router>
  );
}

export default App;
