import React, { useEffect, useState, useRef } from 'react'
import './Order.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer' 
import { useNavigate, useParams } from 'react-router-dom' 
import swal from 'sweetalert'
import Loader from '../../Components/Loader/Loader'
import FinalOrderStatus from '../../Components/FinalOrderStatus/FinalOrderStatus'
import FirstOrderStatus from '../../Components/FirstOrderStatus/FirstOrderStatus'
export default function Order() {
  const [details, setDetails] = useState()
  const [Minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()
  const [Count, setCount] = useState();
  const [waiting, setWaiting] = useState()
  const [status200, setstatus200] = useState();
  const [finalStatus, setFinalStatus] = useState();
  const [Status404, setStatus404] = useState();
  const [LoaderStatus, setLoader] = useState(true);
  let hashChange = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (hashChange) {
      setInterval(() => {
        fetch(`https://traderplus.info/exchange/api/payment_check.php?payment_id=&hash_change=${hashChange.id}`, {
          method: 'POST'
        }).then(res => res.json())
          .then(data => {
            setDetails(data)
            if (data.status == 200) {
              setstatus200(true)
              setWaiting(false)
              setFinalStatus(false)
            }
            else if (data.status == 404) {
              setStatus404(true)
              swal({
                title: 'Submit a New Request',
                icon: 'error',
                button: 'ok'
              }).then(() => {
                navigate('/')
                window.location.reload()
              })


            } else if (data.status == 201) {
              setFinalStatus(true)
              setstatus200(false)
              setWaiting(false)
            } else if (data.status == 300) {
              setWaiting(true)
              setstatus200(false)
              setFinalStatus(false)
            }
        
            setLoader(false)
            console.log(data)
            if (data.secondsleft > 1801) {
              setMinutes(`0`)
              setSeconds(`0000`)
            } else {
              const minutesAndSec = data.secondsleft / 60
              setMinutes(`${minutesAndSec}`)
            }

          })
        setCount(prev => prev + 1)
      }, 40000);

    }





  }, [Count])

  useEffect(() => {
    if (hashChange) {
      setInterval(() => {
        fetch(`https://traderplus.info/exchange/api/payment_check.php?payment_id=&hash_change=${hashChange.id}`, {
          method: 'POST'
        }).then(res => res.json())
          .then(data => {
            if (data.status == 200) {
              setstatus200(true)
            }
            else if (data.status == 404) {

              swal({
                title: 'Submit a New Request',
                icon: 'error',
                button: 'ok'
              }).then(() => {
                navigate('/')
                window.location.reload()
              })


            }
            setDetails(data)
            setLoader(false)
            console.log(data)
            if (data.secondsleft > 1801) {
              setMinutes(`0`)
              setSeconds(`0000`)
            } else {
              const minutesAndSec = data.secondsleft / 60
              setMinutes(`${minutesAndSec}`)
            }

          })
        setCount(prev => prev + 1)
      }, 30000);

    }





  }, [])

  return (

    <div className='order'>
      <Header />
      {details && (
        <>

          {status200 && (
            <>
              <img src="/images/order/icons8-wait-96.png" className='wait-img' alt="" />
              <p className='please-wait-title'>Please Wait...</p>
            </>
          )}

          {waiting && (
           <FirstOrderStatus  Minutes={Minutes}deatils={details}/>
          )}

          {finalStatus && (
          <FinalOrderStatus details={details}/>
          )}

          {Status404 && (
            <div style={{ height: '50vh', width: '100px' }}></div>
          )}

        </>
      )}

      {LoaderStatus && (
        <Loader />
      )}
      <Footer />
    </div>
  )
}
