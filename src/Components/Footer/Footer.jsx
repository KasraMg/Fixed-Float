import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram, AiFillStar, AiOutlineMedium, AiOutlineReddit, AiOutlineTwitter } from 'react-icons/ai'
export default function Footer() {
  return (
    <footer>
      <section>
        <img src="/images/index/logo.PNG" alt="" />
        <div>
            <Link to=""><FaTelegramPlane/></Link>
          <Link to=""> <AiOutlineTwitter/></Link> 
          <Link to=""><AiFillInstagram/></Link>  
           <Link to=""><AiOutlineReddit/></Link> 
           <Link to=""><AiOutlineMedium/></Link> 
          <Link to=""><AiFillStar/></Link>  
        </div>
        <span>© 2018–2023 FixedFloat. All rights reserved.</span>
      </section>
      <ul>
          <div>
            <p>FixedFloat</p>
            <Link to="/"><li>Home</li></Link>  
            <Link to="/About"><li>About</li></Link>
          
        </div>
       
        <div>
            <p>Popular</p>
            <Link to="/Blogs"><li>Blog</li></Link>
            <Link to="/Login"><li>Login / register</li></Link>
          
        </div>
        <div>
            <p>Support</p>
            <Link to="/FAQ"><li>FAQ</li></Link>
            <Link to="/Support"><li>Support</li></Link>
         
        </div>
      </ul>
    </footer>
  )
}
