import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Album from './pages/Album';
import './App.css'
import Fotos from './pages/Fotos'




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
 <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/sobre/:id' element={<Sobre/>} />
    <Route path='/sobre/:id/album' element={<Album/>} />
    <Route path='/sobre/:id/album/fotos/:id' element={<Fotos/>}/>
  </Routes>
 </BrowserRouter>
);


