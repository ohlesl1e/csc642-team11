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
                <Route exact path='/csc642-team11-gatorbuy/' element={<Home />} />
                <Route path='/csc642-team11-gatorbuy/Search' element={<Search />} />
                <Route path='/csc642-team11-gatorbuy/Result' element={<Result />} />
                <Route path='/csc642-team11-gatorbuy/Registration' element={<Registration />} />
                <Route path='/csc642-team11-gatorbuy/Login' element={<Login role='user' />} />
                <Route path='/csc642-team11-gatorbuy/checkout' element={<Checkout />} />
                <Route path='/csc642-team11-gatorbuy/confirmation' element={<Confirmation />} />
                <Route path='/csc642-team11-gatorbuy/notadmin' element={<Login role='admin' />} />
                <Route path='/csc642-team11-gatorbuy/seller' element={<Seller />} />
                <Route path='/csc642-team11-gatorbuy/listing' element={<Listing />} />
                <Route path='/csc642-team11-gatorbuy/admindashboard' element={<Admin />} />
                <Route path='/csc642-team11-gatorbuy/review' element={<Review />} />
                <Route path='/csc642-team11-gatorbuy/Account' element={<Account />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
