import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CardActive from './components/CardActive';
import CardComing from './components/CardComing';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={Navbar}>
                      <Route path="cardActive" element={CardActive} />
                      <Route path="cardComing" element={CardComing} />
                    </Route>
            </Routes>
            
        </BrowserRouter>
    </>
  )
}

export default App