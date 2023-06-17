import React from 'react'
import OrderDetail from '../OrderDetail/OrderDetail'
import OrderGuide from '../OrderGuide/OrderGuide'
import { RiFileCopyFill } from 'react-icons/ri'
import './FinalOrderStatus.css'
export default function FinalOrderStatus({details}) {
  return (
    
    <>
    <section className='order-direction'>
      <div className='your-send-order'>
        <div>
          <p className='mb-1'>YOU SEND</p>
          <span>  {details.amount_user}  {details.symbol1}  </span>
          <p>{details.adress_nowpayment}</p>
        </div>
        <img src={details.imagesymbol1} alt="" />
      </div>

      <div className='order-direction-arrow'></div>

      <div className='your-receive-order'>
        <img src={details.imagesymbol2} alt="" />
        <div>
          <p className='mb-1'>YOU RECEIVE</p>
          <span>  {details.amount_send.slice(0, 9)}  {details.symbol2} </span>
          <p>{details.adress_user}</p>
        </div>

      </div>
    </section>

    <div className="order-action-body">

      <div className='barcode-2-parent'>
        <div className="order-info order-info-2">
          <div>
            <p>Order ID</p>
            <span onClick={() => navigator.clipboard.writeText('3157H2')}>3157H2 <RiFileCopyFill className='order-copy-icon' /></span>
          </div>

          <div>
            <p>Order status</p>

            <span atyle={{ color: 'green' }}>Complate</span>


          </div>



          <div>
            <p>Creation Time</p>
            <p>{details.creation_time.slice(0, 10)}    {details.creation_time.slice(11, 20)}</p>
          </div>

          <div>
            <p>Received Time</p>
            <p>{details.time_change.slice(0, 10)}    {details.time_change.slice(11, 20)}</p>
          </div>

          <div className='border-0'>
            <p>Completed Time</p>
            <p>{details.time_send.slice(0, 10)}    {details.time_send.slice(11, 20)}</p>
          </div>
        </div>

      </div>


      <div className=" order-finaly-data">
        <section>
          <span className='order-finaly-data-title' >Your {details.symbol2} was sent</span>
          <p className='order-finaly-data-body'>If you enjoy your experience on FixedFloat, please leave a review at services below. We appreciate your support! <span></span> </p>
          <div className="order-finaly-detail ">
            <p><i></i> Bestchange</p>
            <p><i></i> Trustpilot</p>
          </div>
        </section>



        <div className='order-finaly-data-img'>
          <img src="/images/order/svgexport-8.svg" alt="" />
        </div>
      </div>

    </div>

    <div className="order-user-info">

      <section className='order-user-info-section'>
        <span>Accepted transaction info</span>
        <div className='mt-4 mb-3'>
          <p>TxID</p>
          <div className='order-user-info-txid' onClick={() => navigator.clipboard.writeText(details.txid_change)}>
            <p>{details.txid_change}</p>
            <i></i>
          </div>
        </div>

        <div>
          <p>Received Time</p>
          <ins></ins>
          <p>{details.time_change}</p>
        </div>
        <div>
          <p>Amount</p>
           <ins></ins>
          <p> {details.amount_user} </p>
        </div>
        <div>
          <p>Fee</p>
           <ins></ins>
          <p> 1 TRX </p>
        </div>
      </section>

      <section className='order-user-info-section'>
      <span>Sent transaction info</span>
        <div className='mt-4 mb-3'>
          <p>TxID</p>
          <div className='order-user-info-txid'  onClick={() => navigator.clipboard.writeText(details.txid_send)}>
            <p>{details.txid_send}</p>
            <i></i>
          </div>
        </div>

        <div>
          <p>Sending time</p>
          <ins></ins>
          <p>{details.time_send}</p>
        </div>
        <div>
          <p>Amount</p>
           <ins></ins>
          <p>{details.amount_send}</p>
        </div>
        <div>
          <p>Fee</p>
           <ins></ins>
          <p> 1 TRX </p>
        </div>
      </section>
    </div>

    <div className='order-details'>
      <OrderDetail icon='order-await' text='Awaiting deposit' flash={true} dark={false} />
      <OrderDetail icon='order-wait' text='Awaiting confirmations' flash={true} dark={false}/>
      <OrderDetail icon='order-done' text='Done' flash={false} dark={false}/>
    </div>

    <OrderGuide />
  </>
  )
}
