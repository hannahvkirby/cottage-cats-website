import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import ScrollToTop from './pages/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element = {<Home/>} exact />
      </Routes>
    </Router>
  );
}

export default App;