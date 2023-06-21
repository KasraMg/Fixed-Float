import React, { useEffect, useState } from 'react'
import './OrderHistory.css'
import UserActiveOrders from '../../../Components/UserActiveOrders/UserActiveOrders';
import UserComplateOrders from '../../../Components/UserComplateOrders/UserComplateOrders';
export default function OrderHistory() {
  const [orderDatas, setOrderDatas] = useState()
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("FixedFloat"));
    if (localStorageData) {
       fetch(`https://traderplus.info/exchange/api/user_orders.php?token=${localStorageData.token}`, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOrderDatas(data);
        
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

    </div>
  )
}
