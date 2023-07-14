import React,{ useState } from 'react' 
import { useFormik } from "formik";
import registerSchema from '../../../Validations/register';
import swal from 'sweetalert';
import Loader from '../../../Components/Loader/Loader';
export default function ForgetPassword() {
const [loaderStatus,setLoader]=useState(false)
    const forgetpassword = useFormik({
        initialValues: { email: "" },
        validationSchema: registerSchema,
    });
    const ForgetPasswordClickHandler=(e)=>{
        e.preventDefault()
        if (forgetpassword.errors.email) {

            swal({
                title: forgetpassword.errors.email && forgetpassword.errors.email  , 
                icon: 'error',
                button: 'try again'
            })
            
        } else {
           if (forgetpassword.values.email.length === 0) {
            swal({
                title: 'Email is not valid!',
                icon: 'error',
                button: 'try again'
            })
        }  else{
            setLoader(true)
            fetch(`  https://testsitexchange.com/api/user_forgetpassword.php?email=${forgetpassword.values.email}`,{
                method:'POST'
            })
            .then(res=>res.json())
            .then(data=>{
                setLoader(false)
                console.log(data);
                if (data.code==200) {
                    swal({
                        title: ' Check your email box',
                        icon: 'success',
                        button: 'ok'
                    })
                }else{
                    swal({
                        title: 'There is no account with this email',
                        icon: 'error',
                        button: 'try again'
                    })
                }
            })
           
            }
        }
       
    }
  return (
    <forgetpassword className="forgot-password">
    <p style={{ color: 'white' }}>Please Type Your Email</p>
    <input 
     value={forgetpassword.values.email}
     onChange={forgetpassword.handleChange}
     onBlur={forgetpassword.handleBlur}
     type="email" name='email' placeholder='Email' />

    <button type='submit' onClick={(e)=>ForgetPasswordClickHandler(e)} className='btn btn-primary'>Reset Password</button>


    {loaderStatus &&(
        <Loader/>
    )}
</forgetpassword>
  )
}
