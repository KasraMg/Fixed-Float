import React from 'react'
import './Footer.css'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram, AiFillStar, AiOutlineMedium, AiOutlineReddit, AiOutlineTwitter } from 'react-icons/ai'
export default function Footer() {
  return (
    <footer>
      <section>
        <img src="./images/index/logo.PNG" alt="" />
        <div>
            <a href=""><FaTelegramPlane/></a>
          <a href=""> <AiOutlineTwitter/></a> 
          <a href=""><AiFillInstagram/></a>  
           <a href=""><AiOutlineReddit/></a> 
           <a href=""><AiOutlineMedium/></a> 
          <a href=""><AiFillStar/></a>  
        </div>
        <span>© 2018–2023 FixedFloat. All rights reserved.</span>
      </section>
      <ul>
          <div>
            <p>FixedFloat</p>
            <a href=""><li>About</li></a>
            <a href=""><li>Our brand</li></a>
            <a href=""><li>Affiliate program</li></a>
            <a href=""><li>Terms of Service</li></a>
            <a href=""><li>Privacy Policy</li></a>
        </div>
       
        <div>
            <p>Popular</p>
            <a href=""><li>Blog</li></a>
            <a href=""><li>XMR to BTC</li></a>
            <a href=""><li>ETH to BTC</li></a>
            <a href=""><li>LTC to ETH</li></a>
        </div>
        <div>
            <p>Support</p>
            <a href=""><li>FAQ</li></a>
            <a href=""><li>Support</li></a>
         
        </div>
      </ul>
    </footer>
  )
}
