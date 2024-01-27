import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Home';
import Header from './components/Header';
import DetailPage from './pages/Home/DetailPage';
const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/detail/:category' element={<DetailPage />} />
            </Routes>
        </>
    );
};

export default App;
