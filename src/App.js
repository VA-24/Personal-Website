import './App.css';
import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects'
import HostedProjects from './pages/HostedProjects'
import Archives from './pages/Archives'
import BLOGwinterbreakthoughts from './blog-posts/winter-break-thoughts'
import BLOGideaboardvol1 from './blog-posts/ideaboard-vol-1'
import BLOGboredom from './blog-posts/boredom'
import ScibowlScrim from './hosted-projects/ScibowlScrim'
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
        <Route exact path='/hosted-projects' element={<HostedProjects />}/>
        <Route exact path='/hosted-projects/scibowlscrim' element={<ScibowlScrim />}/>
      </Routes>
    </Router>
  );
}

export default App;
