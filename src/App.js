import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/Navbar';
import Layout from './components/Layout';

// import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<Home />}></Route> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
