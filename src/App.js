import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import CardActive from './components/CardActive';
import CardComing from './components/CardComing';

function App() {
  const [coleciones, setcoleciones] = useState([]);

  useEffect(() => {
    const getCollecion = async ()=>{
     const url ='https://www.estudiofgl.com.ar/dapp_test/'; 
      const result = await axios.get(url);
      setcoleciones(result.data);
     
     }
   
     getCollecion();
     
  }, []);
 
  return (
    <>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Navbar/>}>
                      <Route path="cardActive" element={<CardActive colection={coleciones}/>} />
                      <Route path="cardComing" element={<CardComing colection={coleciones}/>} />
                    </Route>
            </Routes>
            
        </BrowserRouter>
    </>
  )
}

export default App