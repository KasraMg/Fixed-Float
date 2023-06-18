import React from 'react'
import './Login.css'
import '../Login&Signup/Login&Signup.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { useState } from 'react';
import { useFormik } from "formik";
import registerSchema from '../../Validations/register'
export default function Login() {
    const [passwordShow, setPasswordShow] = useState(false)
    const [confrimePassword, setconfrimePassword] = useState(false)


    const loginform = useFormik({
        initialValues: { password: "", email: "" },

        onSubmit: (values, { setSubmitting }) => {
            console.log("Form Inputs Data =>", values);
            setTimeout(() => {
                setSubmitting(false);
            }, 3000);
        },

        validationSchema: registerSchema,
    });


    return (
        <div className='Login_Signup Login'>
            <Header />
            <p className='Login_Signup-title'>Join to FixedFloat</p>
            <main>


                <section>
                    <div className='Login_Signup_bg'>
                        <img src="../../images/login/svgexport-75.png" alt="" />
                        <img src="../../images/login/svgexport-76.png" alt="" />
                    </div>
                    <form action="">
                        <Tabs
                            defaultActiveKey="Signup"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="Signin" title="Sign in">

                                <loginform onSubmit={loginform.handleSubmit} className="sign-in">
                                    <div>

                                        <input type="email"
                                          name="email" 
                                        value={loginform.values.name}
                                        onChange={loginform.handleChange}
                                        onBlur={loginform.handleBlur}
                                         placeholder='Email' />
                                         {loginform.errors.email && loginform.touched.email && loginform.errors.email}
                                    </div>

                                            
                                    <div>
                                        <input 
                                        name='password'
                                        value={loginform.values.name}
                                        onChange={loginform.handleChange}
                                        onBlur={loginform.handleBlur} type={passwordShow ? 'text' : "password"} placeholder='Password' />
                                        {!passwordShow ? (
                                            <span className='show-icon' onClick={() => setPasswordShow(true)}></span>
                                        ) : (
                                            <span className='hide-icon' onClick={() => setPasswordShow(false)}></span>
                                        )}

                                                {loginform.errors.password && loginform.touched.password && loginform.errors.password}
                                    </div>

                                    <button  type="submit" className='btn btn-primary'>sign in</button>

                                   

                                    
                                 
                                </loginform>

                                 

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
                                    <p style={{ color: 'white' }}>Please Type Your Email</p>
                                    <input type="email" placeholder='Email' />

                                    <button className='btn btn-primary'>Reset Password</button>





                                </div>
                            </Tab>
                        </Tabs>


                    </form>
                </section>

            </main>
            <Footer />
        </div>
    )
}
