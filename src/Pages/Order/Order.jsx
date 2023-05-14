import React from 'react'
import './Order.css'
import Header from '../../Components/Header/Header'
import { RiFileCopyFill } from 'react-icons/ri'
import Barcode from '../../Components/Barcode/Barcode'
export default function Order() {
  return (
    <div className='order'>
      <Header />

      <section className='order-direction'>
        <div className='your-send-order'>
          <div>
            <p className='mb-1'>YOU SEND</p>
            <span>0.00174516 BTC</span>
            <p>bc1qh3wq7u5g9vk0rmpw0wcthmeatuwk99kv299d5c</p>
          </div>
          <img src="../../images/order/icons8-bitcoin-60.png" alt="" />
        </div>

        <div className='order-direction-arrow'></div>

        <div className='your-receive-order'>
          <img src="../../images/order/icons8-bitcoin-60.png" alt="" />
          <div>
            <p className='mb-1'>YOU RECEIVE</p>
            <span>0.0251267 ETH</span>
            <p>0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B</p>
          </div>

        </div>
      </section>

      <div className="order-action-body">

        <div className='barcode-2-parent'>
          <div className="order-info">
            <div>
              <p>Order ID</p>
              <span>3157H2 <RiFileCopyFill className='order-copy-icon' /></span>
            </div>

            <div>
              <p>Time remaining</p>
              <span>23:23</span>
            </div>

            <div>
              <p>Order type</p>
              <p>Float rate</p>
            </div>

            <div className='border-0'>
              <p>Creation Time</p>
              <p>04/26/2023 5:34 PM</p>
            </div>
          </div>

          <div className='barcode-2'><Barcode /></div>
        </div>


        <div className="order-detail">
          <span >Send <p className='mb-0'>0.00167632 BTC</p> to the address:</span>
          <p className='order-detail-address'>bc1qk2xy5k7nwr6k4zew79c63d33lry9ge5lk08srt <RiFileCopyFill className='order-copy-icon' /></p>
          <span className="order-detail-span-2">he exchange rate will be fixed after receiving <strong style={{ color: 'white' }}>1</strong> network confirmations.</span>


          <div>
            <span>Receiving address ETH</span>
            <p>0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B</p>
          </div>
        </div>

        <div className='barcode-1'><Barcode /></div>
      </div>



    </div>
  )
}
