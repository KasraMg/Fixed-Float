import React, { useEffect, useState } from 'react'
import './OrderHistory.css'
import Loader from '../../../Components/Loader/Loader'
import UserActiveOrders from '../../../Components/UserActiveOrders/UserActiveOrders';
import UserComplateOrders from '../../../Components/UserComplateOrders/UserComplateOrders';
export default function OrderHistory() {
  const [orderDatas, setOrderDatas] = useState()
  const [loaderStatus, setLoaderStatus] = useState(false)
  const [orders_openCount,setOrders_openCount]= useState(1)
  const [orders_closeCount,setOrders_closeCount]= useState(1)
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("FixedFloat"));
    if (localStorageData) {
      setLoaderStatus(true)

      fetch(`  https://testsitexchange.com/api/user_orders.php?pageopen=${orders_openCount}&pageclose=${orders_closeCount}&token=${localStorageData.token}`,{
        method: 'POST'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
         
          setOrderDatas(data);
          setLoaderStatus(false)
        })
    }
  }, [orders_openCount,orders_closeCount])

  const plusOrdercloseCount=()=>{
    setOrders_closeCount(prev=>prev +1)
  }
  const minusOrdercloseCount=()=>{
    setOrders_closeCount(prev=>prev -1)
  }
  const plusOrderopenCount=()=>{
    setOrders_openCount(prev=>prev +1)
  }
  const minusOrderopenCount=()=>{
    setOrders_openCount(prev=>prev -1)
  }

  return (
    <div className='OrderHistory'>

      {orderDatas && (
        <>
          <UserActiveOrders plusOrderopenCount={plusOrderopenCount} minusOrderopenCount={minusOrderopenCount} orderDetail={orderDatas.orders_open}  pageCount={Math.ceil(orderDatas.orderopencount / 10)}/>
          <UserComplateOrders minusOrdercloseCount={minusOrdercloseCount} plusOrdercloseCount={plusOrdercloseCount} orderDetail={orderDatas.orders_close} pageCount={Math.ceil(orderDatas.orderclosecount / 10)} />
        </>
      )}
      {loaderStatus && (
        <Loader />

      )}
    </div>
  )
}
