import React, { Children } from 'react'
import './Support.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SupportSection from '../../Components/SupportSection/SupportSection'
import { BsChatTextFill } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import {  AiOutlineTwitter,AiOutlineMail } from 'react-icons/ai'
export default function Support() {
  return (
    <div className='Support'>
      <Header />

    <p className='Support-title'>
    Support
    </p>

    <p className='Support-text'>We are happy to help you sort out any issues 24 hours a day, 7 days a week.</p>
      <main>
        <SupportSection link='/support' bg='./images/support/svgexport-1.svg'>
          <div className='first-SupportSection'>
            <BsChatTextFill />
          </div>
          <p>Live chat</p>
          <span>Start a chat with us now</span>
        

        </SupportSection>


        <SupportSection link='https://t.me/fixedfloat_chat_bot'   bg='./images/support/svgexport-2.svg'>
        <div>
            <FaTelegramPlane style={{left:'10px !important'}} />
          </div>
          <p>Telegram</p>
          <span>Estimated reply time: 10 minutes</span>
        </SupportSection>

        <SupportSection link='http://localhost:3000/Support'  bg='./images/support/svgexport-4.svg'>
        <div>
            <AiOutlineTwitter />
          </div>
          <p>Twitter</p>
          <span>Estimated reply time: 24 hours</span>
        </SupportSection>


        <SupportSection link='http://localhost:3000/Support'  bg='./images/support/svgexport-3.svg'>
        <div>
            <AiOutlineMail />
          </div>
          <p>Email us</p>
          <span>Estimated reply time: 24 hours Go</span>
        </SupportSection>
      </main>
      <Footer />
    </div>
  )
}
