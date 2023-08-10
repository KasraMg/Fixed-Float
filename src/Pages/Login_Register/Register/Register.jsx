import React, { useState,useContext } from 'react'
import { useFormik } from "formik";
import registerSchema from '../../../Validations/register';
import swal from 'sweetalert';
import Loader from '../../../Components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import allData from '../../../Context/allData'

export default function Register() {
    const navigate=useNavigate()
    const authContext=useContext(allData)
    const [passwordShow, setPasswordShow] = useState(false)
    const [LoaderStatus, setLoader] = useState(false)
    const [confrimePassword, setconfrimePassword] = useState(false)
    const registerform = useFormik({
        initialValues: { PassWord: "", email: "", ReapetPassWord: "", name: "" },
        validationSchema: registerSchema,
    });

    const registerClickHandle = (e) => {
        e.preventDefault()
        console.log(registerform.errors);



        if (registerform.errors.email || registerform.errors.PassWord || registerform.errors.ReapetPassWord || registerform.errors.name) {

            swal({
                title: registerform.errors.email && registerform.errors.email || registerform.errors.name && registerform.errors.name,
                text: registerform.errors.PassWord && registerform.errors.PassWord || registerform.errors.ReapetPassWord && registerform.errors.ReapetPassWord,
                icon: 'error',
                button: 'try again'
            })



        }

        else {
            if (registerform.values.PassWord.length === 0 && registerform.values.email.length === 0 && registerform.values.ReapetPassWord.length === 0 && registerform.values.name.length === 0) {
                swal({
                    title: 'Email,name or password is not valid!',
                    icon: 'error',
                    button: 'try again'
                })
            } else {

                if (registerform.values.PassWord == registerform.values.ReapetPassWord) {
                    setLoader(true)
                    fetch(` https://pilbil.com/api/register.php?name=${registerform.values.name}&email=${registerform.values.email}&password1=${registerform.values.PassWord}&password2=${registerform.values.ReapetPassWord}`, {
                        method: 'POST'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data); 
                            setLoader(false)
                            if (data.code == 200) {
                                authContext.login(data.userdata, data.token);
                                navigate('/user-Dashboard/UserProfile')
                            }
                            else if (data.code == 400) {
                                swal({
                                    title: 'This email is already registered',
                                    icon: 'error',
                                    button: 'ok'
                                })

                            }

                        })

                } else {
                    swal({
                        title: 'Password do not match',
                        icon: 'error',
                        button: 'try again'
                    })
                }



            }


        }

    }

    return (
        <registerform  onSubmit={registerform.handleSubmit} className="sign-up">

            <div>
                <input
                    name='name'
                    value={registerform.values.name}
                    onChange={registerform.handleChange}
                    onBlur={registerform.handleBlur}
                    type="text"
                    placeholder='Name' />
            </div>

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

            <button onClick={(e) => registerClickHandle(e)} className='btn btn-primary'>sign up</button>


            {LoaderStatus && (
                <Loader />
            )}

        </registerform>
    )
}
