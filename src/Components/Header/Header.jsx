import React,{useState} from 'react'
import './header.css'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Login_Signup from '../../Pages/Login&Signup/Login&Signup'
import { Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Header() {
    const [showLogin_Signup,setShowlogin_Signup]=useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
  return (
    <header>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <AiOutlineClose className='offcanvas-close' onClick={handleClose} />
          <hr />
        </Offcanvas.Header>
        <Offcanvas.Body>
         <ul>
          <p className='mt-0'>Account</p>
          <li>Sign in</li>
          <li>Sign up</li>
          <p>FixedFloat</p>
          <li>About</li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Support</li>
          <li>Affiliate program</li>
          <li>Our brand</li>
          <p>Rules</p>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <button className='offcanvas-btn' onClick={handleShow}><AiOutlineMenu/></button>
            <a href="https://fixedfloat.com/" class="logo">
                <p class="logo-1"></p>
                <div>
                    <p class="logo-2"></p>
                    <p class="logo-3"></p>
                </div>

                <p class="logo-4"></p>
            </a>
            <div class="header-secton-right">
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Blog</a> </li>
                    <li><a href="">FAQ</a> </li>
                    <li><a href="">Support</a> </li>
                </ul>
                <div class="header-btns">
                    <button><Link to='/Login'>Sign in</Link></button>
                  <button> <Link to='/SignUp'>Sign up</Link></button>
                </div>
            </div>


            {/* {showLogin_Signup &&(
                <div className='login-parent'>
                   <div onClick={()=>setShowlogin_Signup(false)} className="Login_Signup-bg">
               
                </div>
                     <Login_Signup />
                </div>
             
            )} */}
        </header>
  )
}
