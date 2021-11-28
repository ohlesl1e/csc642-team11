import { Container, Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import Result from './pages/Result';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/Search' element={<Search />} />
                <Route path='/Result' element={<Result />} />
                <Route path='/Registration' element={<Registration />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
