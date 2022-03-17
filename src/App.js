// import logo from './logo.svg';
import './App.css';
import React, {Component, useEffect, useState} from 'react';
import Form from './components/Form/Form'
import {Routes, Route} from 'react-router-dom';
import User from "./components/User/User"
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Form />}/>
      <Route path="/user" element={<User />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
   
  )
}
export default App;
