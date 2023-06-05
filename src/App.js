
import './App.css';
import {useEffect,useState,}from 'react'
import { useRoutes } from 'react-router-dom'
import contextDatas from './Context/allData';
import routes from './routes'

import ScrollToUp from './ScrollToUp';
function App() {

let router =useRoutes(routes)
const [token,setToken]=useState(null)
const [userInfos,setUserInfos]=useState(null)
const [Sendcurrency,setSendCurrency]=useState(null) 
const [Recivecurrency,setReciveCurrency]=useState(null) 

  return (
   
    <div>
    <ScrollToUp/>

<contextDatas.Provider  value={{ 
        token,
        userInfos,
        setUserInfos,
        Sendcurrency,
        setSendCurrency, 
        setReciveCurrency,
        Recivecurrency,
      }}>


    {router}

</contextDatas.Provider>

   </div>
  );
}

export default App;
