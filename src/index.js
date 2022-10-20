import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/pages/Home';
import Sobre from './componentes/pages/Sobre';
import Album from './componentes/pages/Album';
import './App.css'
import Fotos from './componentes/pages/Fotos'




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
 <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/sobre/:id' element={<Sobre/>} />
    <Route path='/sobre/:id/album' element={<Album/>} />
    <Route path='/album/:id/fotos' element={<Fotos/>}/>
  </Routes>
 </BrowserRouter>
);


