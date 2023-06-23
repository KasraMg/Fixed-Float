
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
const [Sendcurrency,setSendCurrency]=useState({
  symbol: "BTC",
  price: "25633.10000000",
  status: "1",
  image: "https://traderplus.info/exchange/image/1.png"
  
  }) 
const [Recivecurrency,setReciveCurrency]=useState({
  symbol: "1INCH",
  price :"0.32800000",
  status :  "1",
  image:"https://traderplus.info/exchange/image/8104.png"
}) 
const [Value,setValue]=useState(null) 
const [address,setAddress]=useState()


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
    fetch(`https://traderplus.info/exchange/api/user_info.php?token=${localStorageData.token}`, {
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
      }}>


    {router}

</contextDatas.Provider>

   </div>
  );
}

export default App;
