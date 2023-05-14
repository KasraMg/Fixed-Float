
import './App.css';
import {useEffect,useState,}from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './routes'

import ScrollToUp from './ScrollToUp';
function App() {

let router =useRoutes(routes)

  return (
   
    <div>
    <ScrollToUp/>



    {router}


   </div>
  );
}

export default App;
