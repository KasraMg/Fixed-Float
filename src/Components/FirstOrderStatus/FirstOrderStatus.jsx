import React from 'react'
import OrderDetail from '../OrderDetail/OrderDetail'
import OrderGuide from '../OrderGuide/OrderGuide'
import './FirstOrderStatus.css'
import { RiFileCopyFill } from 'react-icons/ri'
import Barcode from '../Barcode/Barcode'
export default function FirstOrderStatus({details,Minutes}) {
  
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
        <div className="order-info ">
          <div>
            <p>Order ID</p>
            <span onClick={() => navigator.clipboard.writeText('3157H2')}>{details.order_id} <RiFileCopyFill className='order-copy-icon' /></span>
          </div>

          <div>
            <p>Time remaining</p>
            {Minutes == 'Cansel' ?(
              <p style={{color:'red'}}>Cansel</p>
            ):(
              <>
    {Minutes > 10  ?(
            <span>{Minutes.slice(0,2)} minutes</span>
        ):(
            <span>{Minutes.slice(0,1) } minutes</span>
        )}
              </>
            )}
    
          
        
          </div>



          <div className='border-0'>
            <p>Creation Time</p>
            <p>{details.creation_time.slice(0, 10)}    {details.creation_time.slice(11, 20)}</p>
          </div>
        </div>
        <div className='barcode-2'><Barcode address={2} /></div>
      </div>


      <div className="order-detail">
        <span >Send <p className='mb-0'> {details.amount_user}  {details.symbol1}</p> to the address:</span>
        <p className='order-detail-address'>{details.adress_nowpayment} <RiFileCopyFill onClick={() => navigator.clipboard.writeText(details.adress_nowpayment)} className='order-copy-icon' /></p>
        <span className="order-detail-span-2">he exchange rate will be fixed after receiving <strong style={{ color: 'white' }}>1</strong> network confirmations.</span>


        <div>
          <span>Receiving address ETH</span>
          <p>{details.adress_user}</p>
        </div>
      </div>

      <div className='barcode-1'><Barcode /></div>
    </div>

    <div className='order-details'>
      <OrderDetail icon='order-await' text='Awaiting deposit' flash={true} dark={false}/>
      <OrderDetail icon='order-wait' text='Awaiting confirmations' flash={true} dark={true}/>
      <OrderDetail icon='order-done' text='Done' flash={false} dark={true}/>
    </div>
    <OrderGuide />
  </>
  )
}
