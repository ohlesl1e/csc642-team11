import './App.css';
import { Routes, Route } from 'react-router-dom'
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';


import Seller from './pages/SellerPage';
import Listing from './pages/CreateListing';
import Search from './pages/Search';
import Result from './pages/Result';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';


function App() {
    return (
        <div className="App" style={{ height: '100vh' }}>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/Search' element={<Search />} />
                <Route path='/Result' element={<Result />} />
                <Route path='/Registration' element={<Registration />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/confirmation' element={<Confirmation />} />
                <Route path='/notadmin' element={<Login />} />
                <Route path='/seller' element={<Seller />} />
                <Route path='/listing' element={<Listing />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
