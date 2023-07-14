import React, { useContext,useState } from 'react'
import './UserProfile.css'
import allData from '../../../Context/allData'
import swal from 'sweetalert'
import Loader from '../../../Components/Loader/Loader'
export default function UserProfile() {
    const context = useContext(allData)
    const [loaderStatus, setLoaderStatus] = useState(false)
    const [CurrentPassword,setCurrentPassword]=useState() 
    const editPassHandler=()=>{
        swal({
            title:'Please enter your current password',
            content: "input",
            buttons: "ok",
        }).then(currentPass=>{
            if (currentPass.length) {
                setCurrentPassword(currentPass)
             swal({
                title:'Please enter your new password',
                content: "input",
                buttons: "change",
             }).then(newPassword=>{
              if (newPassword) {
                const localStorageData = JSON.parse(localStorage.getItem("FixedFloat"));
                setLoaderStatus(true)
                fetch(`  https://testsitexchange.com/api/user_password_change.php?password=${CurrentPassword}&password1=${newPassword}&token=${localStorageData.token}`,{
                    method:'POST'
                })
                .then(res=>res.json())
                .then(data=>{
                    setLoaderStatus(false)
                    console.log(data);
                   if (data.code==400) {
                    swal({
                        title:'Current password is wrong',
                        icon:'error',
                        button:'try again'
                    }) 
                   }else if(data.code==200){
                    swal({
                        title:'Your password has changed',
                        icon:'success',
                        button:'ok'
                    })
                   }
                })
              }
             })
            }
        })
    }
    return (
        <div className='UserProfile'>
            <p className='UserProfile-title'>Account info</p>
            {context.userInfos && (
                <section className='user-details'>
                    <div className='user-register-time'>
                        <p><strong>Registration date:</strong>{context.userInfos.register_date &&context.userInfos.register_date}</p>
                    </div>
                    <hr />
                    <main>
                        <div>
                            <div>
                                <p>Name</p>
                                <p>{context.userInfos.name}</p>
                            </div>

                        </div>


                        <hr />
                        <div>
                            <div>
                                <p>Email</p>
                                <p>{context.userInfos.email}</p>
                            </div>

                        </div> <hr />

                        <div>
                            <div>
                                <p>Password</p>
                                <p>*********</p>
                            </div>
                             <button className='edit-pass-btn' onClick={editPassHandler}>Edit</button>
                        </div>

                    </main>

                </section>
            )}
     {loaderStatus && (
        <Loader />

      )}
        </div>
    )
}
