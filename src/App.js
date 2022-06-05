import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './pages/main/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
