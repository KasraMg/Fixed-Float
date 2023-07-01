import React,{useContext} from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram, AiFillStar, AiOutlineMedium, AiOutlineReddit, AiOutlineTwitter } from 'react-icons/ai'
import allData from '../../Context/allData'
export default function Footer() {
  const context=useContext(allData)
  return (
    <footer>
      <section>
      <Link to="/" class="logo">
        <p style={context.Sendcurrency &&{color:context.Sendcurrency.color}}   class="logo-1"></p>
        <section>
          <p  style={context.Recivecurrency &&{color:context.Recivecurrency.color}}  class="logo-2"></p>
          <p style={context.Sendcurrency &&{color:context.Sendcurrency.color}}class="logo-3"></p>
        </section>

        <p style={context.Recivecurrency &&{color:context.Recivecurrency.color}} class="logo-4"></p>
      </Link>
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
            <Link to="/Login"><li>Login / Register</li></Link>
        </div>
       
        <div>
            <p>Popular</p>
            <Link to="/Blogs"><li>Blog</li></Link>
            <Link to="/Privacy-Policy"><li>Privacy policy</li></Link>
          
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
