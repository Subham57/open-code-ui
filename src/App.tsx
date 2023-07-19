import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/signup/Signup'
import Home from './components/home/Home';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/signup' element={<Signup />} ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
