import './App.css';
import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects'
import ScienceUtopia from './pages/101scienceutopia'
import Archives from './pages/Archives'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/projects' element={<Projects />}/>
        <Route exact path='/archives' element={<Archives />}/>
        <Route exact path='/101scienceutopia' element={<ScienceUtopia />}/>
      </Routes>
    </Router>
  );
}

export default App;
