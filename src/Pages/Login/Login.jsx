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
import swal from 'sweetalert';
export default function Login() {
    const [passwordShow, setPasswordShow] = useState(false)
    const [confrimePassword, setconfrimePassword] = useState(false)
    

    const loginform = useFormik({
        initialValues: { PassWord: "", email: "" },
        validationSchema: registerSchema,
    });
    const registerform = useFormik({
        initialValues: { PassWord: "", email: "",ReapetPassWord:"" },
        validationSchema: registerSchema,
    });
   

const loginClickHandle=(e)=>{
    e.preventDefault()
    console.log(loginform.errors);
    console.log(loginform.values.PassWord.length);
    console.log(loginform.values.email.length);

    
if (loginform.errors.email || loginform.errors.PassWord ) {
    
    swal({
        title:loginform.errors.email && loginform.errors.email,
        text:loginform.errors.PassWord && loginform.errors.PassWord,
        icon:'error',
        button:'try again'
    })
  
 
   
}

else{
    if ( loginform.values.PassWord.length === 0 && loginform.values.email.length ===0 ) {
        swal({
            title:'email or password is not valid!',
            icon:'error',
            button:'try again'
        })
    }else{
        fetch('')
        swal({
            title:'nice',
            icon:'error',
            button:'try again'
        })
    }

 
}
   
}


const registerClickHandle=(e)=>{
    e.preventDefault()
    console.log(registerform.errors);
     

    
if (registerform.errors.email || registerform.errors.PassWord || registerform.errors.ReapetPassWord ) {
    
    swal({
        title:registerform.errors.email && registerform.errors.email,
        text:registerform.errors.PassWord && registerform.errors.PassWord,
        icon:'error',
        button:'try again'
    })
  
 
   
}

else{
    if ( registerform.values.PassWord.length === 0 && registerform.values.email.length ===0  && registerform.values.ReapetPassWord.length ===0 ) {
        swal({
            title:'email or password is not valid!',
            icon:'error',
            button:'try again'
        })
    }else{
        fetch('')
        swal({
            title:'nice',
            icon:'error',
            button:'try again'
        })
    }

 
}
   
}
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
                                        value={loginform.values.email}
                                        onChange={loginform.handleChange}
                                        onBlur={loginform.handleBlur}
                                         placeholder='Email' />
                                         
                                    </div>

                                            
                                    <div>
                                        <input 
                                        name='PassWord'
                                        value={loginform.values.PassWord}
                                        onChange={loginform.handleChange}
                                        onBlur={loginform.handleBlur} type={passwordShow ? 'text' : "password"} placeholder='Password' />
                                        {!passwordShow ? (
                                            <span className='show-icon' onClick={() => setPasswordShow(true)}></span>
                                        ) : (
                                            <span className='hide-icon' onClick={() => setPasswordShow(false)}></span>
                                        )}

                                               
                                    </div>

                                    <button onClick={(e)=>loginClickHandle(e)}  type="submit" className='btn btn-primary'>sign in</button>

                                   

                                    
                                 
                                </loginform>

                                 

                            </Tab>

                            <Tab eventKey="Signup" title="Sign up">
                                <registerform  onSubmit={registerform.handleSubmit} className="sign-up">

                                    <div>
                                        <input  
                                        name='email'
                                         value={registerform.values.email}
                                        onChange={registerform.handleChange}
                                        onBlur={registerform.handleBlur} 
                                        type="email"
                                         placeholder='Email' />
                                    </div>

                                    <div>
                                        <input
                                           name='PassWord'
                                           value={registerform.values.PassWord}
                                           onChange={registerform.handleChange}
                                           onBlur={registerform.handleBlur}
                                            type={passwordShow ? 'text' : "password"} placeholder='Password' />
                                        {!passwordShow ? (
                                            <span className='show-icon' onClick={() => setPasswordShow(true)}></span>
                                        ) : (
                                            <span className='hide-icon' onClick={() => setPasswordShow(false)}></span>
                                        )}

                                        <div>
                                            <input
                                               name='ReapetPassWord'
                                               value={registerform.values.ReapetPassWord}
                                               onChange={registerform.handleChange}
                                               onBlur={registerform.handleBlur}
                                                type={confrimePassword ? 'text' : "password"} placeholder='Confrim Password' />
                                            {!confrimePassword ? (
                                                <span className='show-Confrim-icon' onClick={() => setconfrimePassword(true)}></span>
                                            ) : (
                                                <span className='hide-Confrim-icon' onClick={() => setconfrimePassword(false)}></span>
                                            )}
                                        </div>




                                    </div>

                                    <button onClick={(e)=>registerClickHandle(e)} className='btn btn-primary'>sign up</button>
                                </registerform>
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
