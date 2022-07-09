import React from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link, Redirect} from 'react-router-dom'
import MainPage from './pages /home';
import ErrorPage from './pages /error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
