import React from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link, Redirect} from 'react-router-dom'
import MainPage from './pages/home';
import ErrorPage from './pages/error';
import LoginPage from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='*' element={<ErrorPage/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
