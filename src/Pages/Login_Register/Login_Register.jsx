import React, { useEffect, useState } from 'react'
import './Login_Register.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from '../../Components/Header/Header' 
import Footer from '../../Components/Footer/Footer'
import Login from './Login/Login';
import Register from './Register/Register';
import ForgetPassword from './ForgetPass/ForgetPassword';
export default function Login_Register() { 

    const [tabStatus, setTabStatus] = useState(0)
    useEffect(() => {
        if (window.location.pathname == '/Login') {
            setTabStatus(1)
        } else if (window.location.pathname == '/Register') {
            setTabStatus(2)
        } else if (window.location.pathname == '/ForgotPassword') {
            setTabStatus(3)
        }
    }, [])


    return (
        <div className='Login_Signup Login'>
            <Header />
            <p  className='Login_Signup-title'>Join to FixedFloat</p>
            <main>


                <section>
                    <div className='Login_Signup_bg'>
                        <img src="../../images/login/svgexport-75.png" alt="" />
                        <img src="../../images/login/svgexport-76.png" alt="" />
                    </div>
                    <form action="">
                        {tabStatus && (
                            <Tabs
                                defaultActiveKey={tabStatus == 1 && "Signin" || tabStatus == 2 && "Signup" || tabStatus == 3 && "forgot"}
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="Signin"  title="Sign in">
                                    <Login />
                                </Tab>

                                <Tab eventKey="Signup"  title="Sign up">
                                    <Register />
                                </Tab>
                                <Tab className='forgot-password-tab' eventKey="forgot" title="forgot password">
                                    <ForgetPassword />
                                </Tab>
                            </Tabs>
                        )}



                    </form>
                </section>

            </main>
            <Footer />
        </div>
    )
}
