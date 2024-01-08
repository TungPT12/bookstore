import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserNavigation from './components/UserNav/usernav';
import Header from './components/Header/header';
import HomePage from './view/HomePage/homepage';
import ProductPage from './view/ProductPage/productpage';
import SecondHeader from './components/SecondHeader/secondheader';
import ProductDetailPage from './view/ProductDetailPage/productdetailpage';
import LoginPage from './view/LoginPage/loginpage';
import Footer from './view/Footer/footer';
import AccountPage from './view/AccountPage/accountpage';
import AccountInfo from './components/AccountInfor/accountinfor';
import CartPage from './view/CartPage/cartpage';
function App() {

  return (
    <Router>
      <div className="App">
        {/* <UserNavigation /> */}
        <Header />
        <SecondHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/product/:id' element={<ProductDetailPage />} />
          <Route
            path='/account/edit'
            element={
              <AccountPage>
                <AccountInfo />
              </AccountPage>
            } />
          <Route path='/payment/guest' element={<ProductDetailPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
