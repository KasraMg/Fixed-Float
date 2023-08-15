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
        <p style={context.Sendcurrency &&{color:context.Sendcurrency.color}}   className="logo-1"></p>
        <section>
          <p  style={context.Recivecurrency &&{color:context.Recivecurrency.color}}  className="logo-2"></p>
          <p style={context.Sendcurrency &&{color:context.Sendcurrency.color}}className="logo-3"></p>
        </section>

        <p style={context.Recivecurrency &&{color:context.Recivecurrency.color}} className="logo-4"></p>
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
