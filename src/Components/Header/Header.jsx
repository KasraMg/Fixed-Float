import React,{useState} from 'react'
import './header.css'
import { AiOutlineMenu } from 'react-icons/ai'
import Login_Signup from '../../Pages/Login&Signup/Login&Signup'
import { Offcanvas } from 'react-bootstrap'
export default function Header() {
    const [showLogin_Signup,setShowlogin_Signup]=useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
  return (
    <header>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
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
                    <button onClick={()=>setShowlogin_Signup(true)}>Sign in</button>
                    <button onClick={()=>setShowlogin_Signup(true)}>Sign up</button>
                </div>
            </div>


            {showLogin_Signup &&(
                <div className='login-parent'>
                   <div onClick={()=>setShowlogin_Signup(false)} className="Login_Signup-bg">
               
                </div>
                     <Login_Signup />
                </div>
             
            )}
        </header>
  )
}
