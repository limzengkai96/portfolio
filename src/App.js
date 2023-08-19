import './App.scss';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/Navbar';
import Layout from './components/Layout';

// import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
