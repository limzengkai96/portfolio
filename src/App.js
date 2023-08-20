import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particle from './components/Particle';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Qualification from './components/Qualification';
import Project from './components/Project';

// import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <HashRouter>
      <Particle />
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/qualification' element={<Qualification/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;