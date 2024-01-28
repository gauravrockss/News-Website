import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Header from './components/Header';
import DetailPage from './pages/Home/DetailPage';
import Footer from './components/Footer';
const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/help' element={<Help />} />
                <Route path='/detail/:category' element={<DetailPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
