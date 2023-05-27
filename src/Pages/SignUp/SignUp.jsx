import React from 'react'
import './SignUp.css' 
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../Login&Signup/Login&Signup.css'
import { useState } from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
export default function SignUp() {
    const [passwordShow, setPasswordShow] = useState(false)
    const [confrimePassword, setconfrimePassword] = useState(false)
  return (
    <div className='Login_Signup SignUp'>
        <Header/>
        <p className='Login_Signup-title'>Join to FixedFloat</p>
    <main>


        <section>
            <div className='Login_Signup_bg'>
                <img src="../../images/login/svgexport-75.png" alt="" />
                <img src="../../images/login/svgexport-76.png" alt="" />
            </div>
            <form action="">
                <Tabs
                    defaultActiveKey="Signin"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="Signin" title="Sign in">

                        <div className="sign-in">

                            <div>

                                <input type="email" placeholder='Email' />
                            </div>

                            <div>
                                <input type={passwordShow ? 'text' : "password"} placeholder='Password' />
                                {!passwordShow ? (
                                    <span className='show-icon' onClick={() => setPasswordShow(true)}></span>
                                ) : (
                                    <span className='hide-icon' onClick={() => setPasswordShow(false)}></span>
                                )}


                            </div>

                            <button className='btn btn-primary'>sign in</button>
                        </div>

                    </Tab>

                    <Tab eventKey="Signup" title="Sign up">
                        <div className="sign-up">

                            <div>

                                <input type="email" placeholder='Email' />
                            </div>

                            <div>
                                <input type={passwordShow ? 'text' : "password"} placeholder='Password' />
                                {!passwordShow ? (
                                    <span className='show-icon' onClick={() => setPasswordShow(true)}></span>
                                ) : (
                                    <span className='hide-icon' onClick={() => setPasswordShow(false)}></span>
                                )}

                                <div>
                                    <input type={confrimePassword ? 'text' : "password"} placeholder='Confrim Password' />
                                    {!confrimePassword ? (
                                        <span className='show-Confrim-icon' onClick={() => setconfrimePassword(true)}></span>
                                    ) : (
                                        <span className='hide-Confrim-icon' onClick={() => setconfrimePassword(false)}></span>
                                    )}
                                </div>




                            </div>

                            <button className='btn btn-primary'>sign up</button>
                        </div>
                    </Tab>
                    <Tab className='forgot-password-tab' eventKey="forgot" title="forgot password">
                        <div className="forgot-password">

                                        <p style={{color:'white'}}>Please Type Your Email</p>
                                <input type="email" placeholder='Email' />
                           
                            <button className='btn btn-primary'>Reset Password</button>

                            

                      

                        </div>
                    </Tab>

                </Tabs>


            </form>
        </section>
    </main>
    <Footer/>
</div>
  )
}
