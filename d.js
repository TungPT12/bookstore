import Home from '../Home';
import LoginPage from '../LoginPage';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import { useState } from 'react';
import Search from '../Search';
import './main.css'
import ListUser from '../../components/CardUser';


function Main({ Component = <ListUser />, }) {

    const [component, setComponent] = useState(Component);
    let indexCmp = localStorage.getItem('uid') ? <Home>{component}</Home> : <LoginPage />
    return (
        <div className='main-wrapper'>
            <Router>
                <Routes>
                    <Route path="/" element={indexCmp} />
                    <Route path="/search" element={<Home>{<Search/>}</Home>} />
                </Routes>
            </Router>
        </div>
    );
}

export default Main;