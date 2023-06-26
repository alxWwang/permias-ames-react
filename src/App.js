import React, { Component } from 'react';
import './App.css';
import PermiasHeader from './headerku/header';
import HomePageKu from './HomePageKu/homepageku';
import NewStu from './newStu/newStu';
import Alum from './alumni/alumni';
import Board from './board/board'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';



function App() {
  return (
    


    <div className="App">


      <BrowserRouter>
      <Routes>
        <Route index element={<HomePageKu/> }/>
        <Route path='/NewStu' element={<NewStu/>}/>
        <Route path='/Alumni' element={<Alum/>}/>
        <Route path='/Board' element ={<Board/>}/>
        <Route path='/Ames' Component={()=>{
          window.location.href = 'https://discoverames.com/';
          return null;
        }}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
