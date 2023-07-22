import React, { useState,useContext } from 'react'
import { useFormik } from "formik";
import registerSchema from '../../../Validations/register';
import swal from 'sweetalert';
import Loader from '../../../Components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import allData from '../../../Context/allData'
export default function Login() {
    const navigate=useNavigate()
    const authContext=useContext(allData)
    const [passwordShow, setPasswordShow] = useState(false)
    const [LoaderStatus, setLoader] = useState(false)
    const loginform = useFormik({
        initialValues: { PassWord: "", email: "" },
        validationSchema: registerSchema,
    });

    const loginClickHandle = (e) => {
        e.preventDefault()
        console.log(loginform.errors);
        console.log(loginform.values.PassWord.length);
        console.log(loginform.values.email.length);


        if (loginform.errors.email || loginform.errors.PassWord) {

            swal({
                title: loginform.errors.email && loginform.errors.email,
                text: loginform.errors.PassWord && loginform.errors.PassWord,
                icon: 'error',
                button: 'try again'
            })



        }

        else {
            if (loginform.values.PassWord.length === 0 && loginform.values.email.length === 0) {
                swal({
                    title: 'email or password is not valid!',
                    icon: 'error',
                    button: 'try again'
                })
            } else {
                setLoader(true)
                fetch(`   https://testsitexchange.com/api/login.php?email=${loginform.values.email}&password=${loginform.values.PassWord}`, {

                    method: 'POST'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        console.log(loginform.values.email);
                        console.log(loginform.values.PassWord);
                        setLoader(false)
                        if (data.code == 200) {
                            authContext.login(data.userdata, data.token);
                            navigate('/user-Dashboard/UserProfile')
                        }else if(data.code == 400){
                            swal({
                                title: 'Email or password is wrong',
                                icon: 'error',
                                button: 'try again'
                            }) 
                        }
                    })

            }


        }

    }


    return (
        <loginform onSubmit={loginform.handleSubmit} className="sign-in" >
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

            <button onClick={(e) => loginClickHandle(e)} type="submit" className='btn btn-primary'>sign in</button>



{LoaderStatus &&(
    <Loader/>
)}

        </loginform>
    )
}
