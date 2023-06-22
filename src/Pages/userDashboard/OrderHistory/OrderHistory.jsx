import React, { useEffect, useState } from 'react'
import './OrderHistory.css'
import Loader from '../../../Components/Loader/Loader'
import UserActiveOrders from '../../../Components/UserActiveOrders/UserActiveOrders';
import UserComplateOrders from '../../../Components/UserComplateOrders/UserComplateOrders';
export default function OrderHistory() {
  const [orderDatas, setOrderDatas] = useState()
  const [loaderStatus, setLoaderStatus] = useState(false)
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("FixedFloat"));
    if (localStorageData) {
      setLoaderStatus(true)
      fetch(`https://traderplus.info/exchange/api/user_orders.php?token=${localStorageData.token}`, {
        method: 'POST'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setOrderDatas(data);
          setLoaderStatus(false)
        })
    }
  }, [])

  return (
    <div className='OrderHistory'>

      {orderDatas && (
        <>
          <UserActiveOrders orderDetail={orderDatas.orders_open} />
          <UserComplateOrders orderDetail={orderDatas.orders_close} />
        </>
      )}
      {loaderStatus && (
        <Loader />

      )}
    </div>
  )
}
