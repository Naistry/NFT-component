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
                <Route index element={<Navbar />} />
                    <Route path="cardActive" component={<CardActive />} />
                    <Route path="cardComing" component={<CardComing />} />
            </Routes>
            
        </BrowserRouter>
    </>
  )
}

export default App