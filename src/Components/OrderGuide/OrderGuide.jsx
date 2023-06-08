import React from 'react'
import './OrderGuide.css'
export default function OrderGuide() {
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
              <input type="email" placeholder='Email' />
              <button>Confrime</button>
        </div>
           
              <img src="/images/order/Guide.PNG" alt="" />
      </section>

    </div>
  )
}
