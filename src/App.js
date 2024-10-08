import './App.css';
import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects'
import HostedProjects from './pages/HostedProjects'
import Archives from './pages/Archives'
import BLOGwinterbreakthoughts from './blog-posts/winter-break-thoughts'
import BLOGideaboardvol1 from './blog-posts/ideaboard-vol-1'
import BLOGideaboardvol2 from './blog-posts/ideaboard-vol-2'
import BLOGboredom from './blog-posts/boredom'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/projects' element={<Projects />}/>
        <Route exact path='/archives' element={<Archives />}/>
        <Route exact path='/archives/winter-break-thoughts' element={<BLOGwinterbreakthoughts />}/>
        <Route exact path='/archives/ideaboard-vol-1' element={<BLOGideaboardvol1 />}/>
        <Route exact path='/archives/boredom' element={<BLOGboredom />}/>
        <Route exact path='/archives/ideaboard-vol-2' element={<BLOGideaboardvol2 />}/>
        <Route exact path='/hosted-projects' element={<HostedProjects />}/>
      </Routes>
    </Router>
  );
}

export default App;
