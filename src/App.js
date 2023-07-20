
import './App.css';
import {useEffect,useState,useCallback}from 'react'
import { useRoutes } from 'react-router-dom'
import contextDatas from './Context/allData';
import routes from './routes'
import { useNavigate } from 'react-router-dom';
import ScrollToUp from './ScrollToUp';
function App() {
const navigate=useNavigate()
let router =useRoutes(routes)
const [token,setToken]=useState(null)
const [userInfos,setUserInfos]=useState(null)
const [Sendcurrency,setSendCurrency]=useState() 
const [Recivecurrency,setReciveCurrency]=useState() 
const [Value,setValue]=useState(5000) 
const [address,setAddress]=useState()
const [memo,setMemo]=useState()


const login = (userInfos, token) => {
  setToken(token); 
  setUserInfos(userInfos);
  localStorage.setItem("FixedFloat", JSON.stringify({ token }));
};



const logout = useCallback(() => {
  setUserInfos(null);
  setToken(null); 
  localStorage.removeItem("FixedFloat");
  navigate('/')
});

useEffect(() => { 
  const localStorageData = JSON.parse(localStorage.getItem("FixedFloat"));

  if (localStorageData) { 
    fetch(`   http://testsitexchange.com/api/user_info.php?token=${localStorageData.token}`, {
      method:'POST'
    })
      .then((res) => res.json())
      .then((userInfo) => {
        setUserInfos(userInfo.userdata)  
      });
  }  
},[]);
 
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
        setValue,
        Value,
        address,
        setAddress, 
        login, 
        logout,
        setMemo,
        memo
      }}>


    {router}

</contextDatas.Provider>

   </div>
  );
}

export default App;
