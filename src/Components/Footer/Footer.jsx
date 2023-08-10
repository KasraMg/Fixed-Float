import React,{ useContext,useEffect,useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom' 
import allData from '../../Context/allData' 
export default function Footer() {
  const context=useContext(allData)
  const [social,setSocial]=useState()
  useEffect(() => {
     fetch(`https://pilbil.com/api/social.php`)
     .then(res=>res.json())
     .then(data=>{ 
      setSocial(data);
     })
  }, [])
  
  return (
    <footer>
      <section>
      <Link to="/" className="logo">
       
      <svg   width="68" height="70">
        <text font-size="45" font-family="logo" x="10" y="50" fill={context.Sendcurrency && context.Sendcurrency.color} style={{position:'relative',zIndex:'999'}}>PiL</text>
      </svg>
       
        <div>
          <p  style={context.Recivecurrency &&{color:context.Recivecurrency.color}}  className="logo-2"></p>
          <p style={context.Sendcurrency &&{color:context.Sendcurrency.color}}className="logo-3"></p>
        </div>

        <svg className='logo-4' width="68" height="70">
            <text font-size="45" font-family="logo" x="10" y="50" fill={context.Recivecurrency && context.Recivecurrency.color} style={{position:'relative',zIndex:'999'}}>biL</text>
         </svg>
      </Link>
        <div>
          {social && social.social.map(data=>(
            <a className='social' key={data.icon} href={data.link}><img height={22.5}   src={data.icon} alt="" /></a>
          ))} 
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
