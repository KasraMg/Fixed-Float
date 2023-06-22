import React, { useState, useContext } from 'react'
import './header.css'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsPerson, BsFileText } from 'react-icons/bs'
import { CiLogout } from 'react-icons/ci'
import allData from '../../Context/allData'
import { Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom' 
import swal from 'sweetalert'
export default function Header() {
  const [show, setShow] = useState(false);
  const [showCms, setShowCms] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userContext = useContext(allData)
  const signOutHandler=()=>{
    swal({
     title:'Are you sure to logout?',
     icon:'warning',
     buttons:['no','yes']
    }).then(res=>{
      userContext.logout()
      setShowCms(false)
    })
 }
  return (
    <header>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <AiOutlineClose className='offcanvas-close' onClick={handleClose} />
          <hr />
        </Offcanvas.Header>
        <Offcanvas.Body onClick={handleClose}>
          <ul>
            <p className='mt-0'>Account</p>
            {userContext.userInfos ? (
              <>
                <Link to='/user-Dashboard/UserProfile'><li><BsPerson  style={{fontSize:'1.2rem',marginRight:'.5rem'}}/> Personal data</li></Link>
                <Link to='/user-Dashboard/OrderHistory'><li><BsFileText style={{fontSize:'1.2rem',marginRight:'.5rem'}}/> Orders history</li> </Link>
                <li onClick={signOutHandler} style={{color: '#ffb0b0'}}><CiLogout style={{fontSize:'1.2rem',marginRight:'.5rem', color: '#ffb0b0'}}/> Sign out</li>

              </>
            ) : (
              <>
                <Link to="/Login"><li>Sign in</li></Link>
                <Link to="/Register"><li>Sign up</li></Link>

              </>
            )}

            <p>FixedFloat</p>
            <Link to="/About"><li>About</li></Link>
            <Link to="/Blogs"><li>Blog</li></Link>
            <Link to="/FAQ"><li>FAQ</li></Link>
            <Link to="/Support"><li>Support</li></Link>


          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <button className='offcanvas-btn' onClick={handleShow}><AiOutlineMenu /></button>
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
        {userContext.userInfos ? (
          <div class="header-account" onClick={() => setShowCms(prev => !prev)}>
            <p className='profile-text'> Account </p>
          </div>

        ) : (
          <>
            <div class="header-btns">
              <button><Link to='/Login'>Sign in</Link></button>
              <button> <Link to="/Register">Sign up</Link></button>
            </div>
          </>
        )}

      </div>

      {showCms && (
        <>
          <div className='cms-dashboard'>
            <div className="cms-dashboard-bg" onClick={() => setShowCms(false)}></div>
            <ul>
              <Link to='/user-Dashboard/UserProfile'><li><BsPerson className='cms-dashboard-icon' /> Personal data</li> </Link> 
              <Link to='/user-Dashboard/OrderHistory'> <li><BsFileText className='cms-dashboard-icon' /> Orders history</li></Link>
              <li onClick={signOutHandler} style={{color: '#ffb0b0'}}><CiLogout className='cms-dashboard-icon' /> Sign out</li>
            </ul>
          </div>
        </>
      )}

    </header>
  )
}
