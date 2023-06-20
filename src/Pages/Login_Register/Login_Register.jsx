import React from 'react'
import './Login_Register.css' 
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Login from './Login/Login';
import Register from './Register/Register';
import ForgetPassword from './ForgetPass/ForgetPassword';
export default function Login_Register() {
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

                               <Login/>
 
                            </Tab>

                            <Tab eventKey="Signup" title="Sign up">
                                <Register/>
                            </Tab>
                            <Tab className='forgot-password-tab' eventKey="forgot" title="forgot password">
                               <ForgetPassword/>
                            </Tab>
                        </Tabs>


                    </form>
                </section>

            </main>
            <Footer />
        </div>
    )
}
