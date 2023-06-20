import React, { useContext } from 'react'
import './UserProfile.css'
import allData from '../../../Context/allData'
import swal from 'sweetalert'
export default function UserProfile() {
    const context = useContext(allData)

    const editPassHandler=()=>{
        swal({
            title:'Please enter your current password',
            content: "input",
            buttons: "ok",
        })
    }
    return (
        <div className='UserProfile'>
            <p className='UserProfile-title'>Account info</p>
            {context.userInfos && (
                <section className='user-details'>
                    <div className='user-register-time'>
                        <p><strong>Registration date:</strong>{context.userInfos.register_date}</p>
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

        </div>
    )
}
