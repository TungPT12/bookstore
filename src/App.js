import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserNavigation from './components/UserNav/usernav';
import Header from './components/Header/header';
import HomePage from './view/HomePage/homepage';
import ProductPage from './view/ProductPage/productpage';
import SecondHeader from './components/SecondHeader/secondheader';
function App() {
  return (
    <Router>
    <div className="App">
      <UserNavigation/>
      <Header/>    
      <SecondHeader/> 
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/product' element={<ProductPage/>} />
        </Routes>
      
    </div>
    </Router>


  );
}

export default App;
