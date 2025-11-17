import React from 'react'  //use-rafce
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Success from './pages/Success';


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      <Route path="/Success" element={<Success/>}></Route>
    </Routes>
    <Toaster></Toaster>
   </Router>
  )
}

export default App
