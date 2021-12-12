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
import Admin from './pages/Admin';
import Review from './pages/Review';
import Account from './pages/Account';


function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path='' element={<Home />} />
                <Route exact path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/result' element={<Result />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/login' element={<Login role='user' />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/confirmation' element={<Confirmation />} />
                <Route path='/notadmin' element={<Login role='admin' />} />
                <Route path='/seller' element={<Seller />} />
                <Route path='/listing' element={<Listing />} />
                <Route path='/admindashboard' element={<Admin />} />
                <Route path='/review' element={<Review />} />
                <Route path='/account' element={<Account />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
