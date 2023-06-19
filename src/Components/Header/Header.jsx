import React,{useState,useContext} from 'react'
import './header.css'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import allData from '../../Context/allData'
import { Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Header() { 
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const  userContext=useContext(allData)
  
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
               <Link to="/Login"><li>Sign in</li></Link>
               <Link to="/Login"><li>Sign up</li></Link>
               <p>FixedFloat</p>
               <Link to="/About"><li>About</li></Link>
               <Link to="/Blogs"><li>Blog</li></Link>
               <Link to="/FAQ"><li>FAQ</li></Link>
               <Link to="/Support"><li>Support</li></Link>
              
               
         </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <button className='offcanvas-btn' onClick={handleShow}><AiOutlineMenu/></button>
            <Link to="/" class="logo">
                <p class="logo-1"></p>
                <div>
                    <p class="logo-2"></p>
                    <p class="logo-3"></p>
                </div>

                <p class="logo-4"></p>
            </Link>
            <div class="header-secton-right">
                <ul>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Blogs">Blog</Link> </li>
                    <li><Link to="/FAQ">FAQ</Link> </li>
                    <li><Link to="/Support">Support</Link> </li>
                </ul>
                {userContext.userInfos ?(
                  <div class="header-account">
                      <p className='profile-text'> Account </p> 
                  </div>
               
                ):(
                  <> 
                  <div class="header-btns">
                    <button><Link to='/Login'>Sign in</Link></button>
                  <button> <Link to='/Login'>Sign up</Link></button>
                </div>
                </>
                )}
                
            </div>

 
        </header>
  )
}
