import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/signup/SignUp';
import Signup1 from './components/signup/Signup1';

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
              <Route path='/signup' element={<Signup />} ></Route>
              <Route path='/signup1' element={<Signup1 />} ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
