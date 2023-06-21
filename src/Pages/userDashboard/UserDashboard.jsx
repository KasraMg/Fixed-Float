import React, { useState,useEffect } from 'react'
import './UserDashboard.css'
import Header from '../../Components/Header/Header'
import { BsFileText } from 'react-icons/bs'
import { CiLogout } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'
import Footer from '../../Components/Footer/Footer'
import { Link,useParams,Outlet } from 'react-router-dom' 
export default function UserDashboard() {
    const [activeRoute, setActiveRoute] = useState('Personal data')
    const path=useParams()

    useEffect(() => {
        setActiveRoute(window.location.pathname.slice(16,29));
    }, [window.location.pathname])
    
    return (
        <div className='UserDashboard'>
            <Header />

            <div className='UserDashboard-dashboard-parent'>
                <section className='dashboard-routes'>
                    <ul>
                        <Link to='UserProfile'><li onClick={() => setActiveRoute('UserProfile')} className={activeRoute == 'UserProfile' && 'dashboard-active-routes'}>
                            <FaUser className='user-dashboard-icon' />Personal data
                        </li>
                        </Link>
                        <Link to='OrderHistory'>    <li onClick={() => setActiveRoute('OrderHistory')} className={activeRoute == 'OrderHistory' && 'dashboard-active-routes'}>
                            <BsFileText className='user-dashboard-icon' />Orders history
                        </li>
                        </Link>
                        <li className='logout-link' style={{ color: ' #ffb0b0 ' }}> <CiLogout className='user-dashboard-icon' /> Sign out  </li>
                    </ul>
                </section>
                <main className='main-UserDashboard'>
                    <Outlet />
                </main>
            </div>


            <Footer />
        </div>
    )
}
