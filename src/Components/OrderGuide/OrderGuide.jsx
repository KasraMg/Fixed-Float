import React, { useState } from 'react'
import './OrderGuide.css'
import swal from 'sweetalert'
import { useParams } from 'react-router-dom'
export default function OrderGuide() {
  const [email, setEmail] = useState()
  const param=useParams() 
  const EmailRegxe = RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)
  const seEmailHandler = () => {
    if (EmailRegxe.test(email)) {
      fetch(` https://pilbil.com/api/payment_email.php?hash_change=${param.id}&email=${email}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if (data.code ==200) {
          swal({
            title:'Your email has been registered',
            icon:'success',
            buttons:'ok'
          })
        }
      })
    }else{
      swal({
        title:'Email is wrong',
        icon:'error',
        buttons:'try again'
      })
    }
  }
  return (
    <div className='OrderGuide'>
      <main>
        <p className='OrderGuide-main-title'>What do you need to know?</p>

        <div>
          <p>You need 2 confirmations of the Litecoin blockchain for the exchange</p>
          <span className='OrderGuide-icon OrderGuide-icon1'></span>
        </div>
        <div>
          <p>Our exchanger only sends transactions to the original USDT contract </p>
          <span className='OrderGuide-icon  OrderGuide-icon2'></span>
        </div>
        <div>
          <p>If the amount of the transaction you sent differs from the initial amount specified in the order with a float rate, the order will be automatically recalculated.</p>
          <span className='OrderGuide-icon  OrderGuide-icon3'></span>
        </div>
        <div>
          <p>
            If your transaction is received after the expiration of the order, but within 24 hours, then this transaction will be automatically displayed in the order. You will be able to continue the order yourself or make a refund.</p>
          <span className='OrderGuide-icon  OrderGuide-icon4'></span>
        </div>
      </main>

      <section>
        <div>
          <p className='OrderGuide-section-title'>Order status notifications</p>
          <span>Enter your email if you want to receive notifications about changes in the status of this order</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
          <button onClick={seEmailHandler}>Confrime</button>
        </div>

        <img src="/images/order/Guide.PNG" alt="" />
      </section>

    </div>
  )
}
