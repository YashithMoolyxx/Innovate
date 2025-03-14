import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Problems from './pages/Problems';
import Success from './pages/Success';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/problems" element={<Problems/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </div>
  )
}

export default App
