import React,{ useEffect , useState, useRef} from 'react'
import './Order.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { RiFileCopyFill } from 'react-icons/ri'
import Barcode from '../../Components/Barcode/Barcode'
import { useNavigate, useParams } from 'react-router-dom'
import OrderGuide from '../../Components/OrderGuide/OrderGuide'
import OrderDetail from '../../Components/OrderDetail/OrderDetail'
import swal from 'sweetalert'
import Loader from '../../Components/Loader/Loader'
export default function Order() {
  const [details,setDetails]=useState() 
  const [Minutes,setMinutes]=useState() 
  const [seconds,setSeconds]=useState()  
  const [Count, setCount] = useState();
  const [waiting,setWaiting]=useState()
  const [status200, setstatus200] = useState();
  const [finalStatus, setFinalStatus] = useState();
  const [Status404, setStatus404] = useState();
  const [LoaderStatus, setLoader] = useState(true);
  let hashChange=useParams()
  const navigate=useNavigate()
  useEffect(() => {
    if (hashChange) {
      setInterval(() => {
        fetch(`https://traderplus.info/exchange/api/payment_check.php?payment_id=&hash_change=${hashChange.id}`,{
      method:'POST'
     }).then(res=>res.json())
     .then(data=>{ 
     
      if (data.status==200) {
        setstatus200(true)
        setWaiting(false)
        setFinalStatus(false)
      }
      else if(data.status==404){
        setStatus404(true)
          swal({
          title:'Submit a New Request',
          icon :'error',
          button:'ok'
        }).then(()=>{
          navigate('/')
          window.location.reload()
       } )
        
        
      }else if(data.status==201){
        setFinalStatus(true)
        setstatus200(false)
        setWaiting(false)
      }else if (data.status==300){
        setWaiting(true)
        setstatus200(false)
        setFinalStatus(false)
      } 
      setDetails(data)   
      setLoader(false)
      console.log(data)
      if (data.secondsleft > 1801) {
        setMinutes(`0`)
        setSeconds(`0000`)
      }else{
        const minutesAndSec = data.secondsleft  / 60
        setMinutes(`${minutesAndSec}`) 
      }
  
     })
     setCount(prev=>prev + 1)
    }, 40000);
   
  }
   
 

    

  }, [Count])
  
  useEffect(() => {
    if (hashChange) {
      setInterval(() => {
        fetch(`https://traderplus.info/exchange/api/payment_check.php?payment_id=&hash_change=${hashChange.id}`,{
      method:'POST'
     }).then(res=>res.json())
     .then(data=>{ 
      if (data.status==200) {
        setstatus200(true)
      }
      else if(data.status==404){
       
          swal({
          title:'Submit a New Request',
          icon :'error',
          button:'ok'
        }).then(()=>{
          navigate('/')
          window.location.reload()
       } )
         
        
      }
      setDetails(data)
      setLoader(false)
        console.log(data)
      if (data.secondsleft > 1801) {
        setMinutes(`0`)
        setSeconds(`0000`)
      }else{
        const minutesAndSec = data.secondsleft  / 60
        setMinutes(`${minutesAndSec}`) 
      }
  
     })
     setCount(prev=>prev + 1)
    }, 30000);
   
  }
   
 

    

  }, [])
  
  return (

    <div className='order'>
      <Header />
{details &&(
  <>

{status200 &&(
<>
<img src="/images/order/icons8-wait-96.png" className='wait-img' alt="" />
<p className='please-wait-title'>Please Wait...</p>
</>
)}

{waiting  &&(
  <>

 
   <section className='order-direction'>
        <div className='your-send-order'>
          <div>
            <p className='mb-1'>YOU SEND</p>
            <span>  {details.amount_user}  {details.symbol1}  </span>
            <p>{details.adress_nowpayment}</p>
          </div>
          <img src={details.imagesymbol1}alt="" />
        </div>

        <div className='order-direction-arrow'></div>

        <div className='your-receive-order'>
          <img src={details.imagesymbol2}alt="" />
          <div>
            <p className='mb-1'>YOU RECEIVE</p>
            <span>  {details.amount_send.slice(0,9)}  {details.symbol2} </span>
            <p>{details.adress_user}</p>
          </div>

        </div>
      </section>

      <div className="order-action-body">

        <div className='barcode-2-parent'>
          <div className="order-info">
            <div>
              <p>Order ID</p>
              <span onClick={() => navigator.clipboard.writeText('3157H2')}>3157H2 <RiFileCopyFill className='order-copy-icon' /></span>
            </div>

            <div>
              <p>Time remaining</p>
             
                    <span>{Minutes.slice(0,2)} minutes</span>
               
          
            </div>

            

            <div className='border-0'>
              <p>Creation Time</p>
              <p>{details.creation_time.slice(0,10)}    {details.creation_time.slice(11,20)}</p>
            </div>
          </div> 
          <div className='barcode-2'><Barcode address={2} /></div>
        </div>


        <div className="order-detail">
          <span >Send <p className='mb-0'> {details.amount_user}  {details.symbol1}</p> to the address:</span>
          <p className='order-detail-address'>{details.adress_nowpayment} <RiFileCopyFill onClick={() => navigator.clipboard.writeText(details.adress_nowpayment)} className='order-copy-icon' /></p>
          <span className="order-detail-span-2">he exchange rate will be fixed after receiving <strong style={{ color: 'white' }}>1</strong> network confirmations.</span>


          <div>
            <span>Receiving address ETH</span>
            <p>{details.adress_user}</p>
          </div>
        </div>

        <div className='barcode-1'><Barcode /></div>
      </div>

      <div className='order-details'>
          <OrderDetail icon='order-await' text='Awaiting deposit' flash={true}/>
          <OrderDetail icon='order-wait' text='Awaiting confirmations' flash={true}/>
          <OrderDetail icon='order-done' text='Done' flash={false}/>
      </div>
 <OrderGuide/>
 </>
  )}

{finalStatus &&(
<>
<section className='order-direction'>
        <div className='your-send-order'>
          <div>
            <p className='mb-1'>YOU SEND</p>
            <span>  {details.amount_user}  {details.symbol1}  </span>
            <p>{details.adress_nowpayment}</p>
          </div>
          <img src={details.imagesymbol1}alt="" />
        </div>

        <div className='order-direction-arrow'></div>

        <div className='your-receive-order'>
          <img src={details.imagesymbol2}alt="" />
          <div>
            <p className='mb-1'>YOU RECEIVE</p>
            <span>  {details.amount_send.slice(0,9)}  {details.symbol2} </span>
            <p>{details.adress_user}</p>
          </div>

        </div>
      </section>

      <div className="order-action-body">

<div className='barcode-2-parent'>
  <div className="order-info">
    <div>
      <p>Order ID</p>
      <span onClick={() => navigator.clipboard.writeText('3157H2')}>3157H2 <RiFileCopyFill className='order-copy-icon' /></span>
    </div>

    <div>
      <p>Order status</p>
     
            <span atyle={{color:'green'}}>Complate</span>
       
  
    </div>

    

    <div>
      <p>Creation Time</p>
      <p>{details.creation_time.slice(0,10)}    {details.creation_time.slice(11,20)}</p>
    </div>
    
    <div>
      <p>Received Time</p>
      <p>{details.time_change.slice(0,10)}    {details.time_change.slice(11,20)}</p>
    </div>
    
    <div className='border-0'>
      <p>Completed Time</p>
      <p>{details.time_send.slice(0,10)}    {details.time_send.slice(11,20)}</p>
    </div>
  </div> 
   
</div>


<div className=" order-finaly-data">
  <section>
     <span className='order-finaly-data-title' >Your {details.symbol2} was sent</span>
  <p className='order-finaly-data-body'>If you enjoy your experience on FixedFloat, please leave a review at services below. We appreciate your support! <span></span> </p>
  <div className="order-finaly-detail "> 
  <p><i></i> Bestchange</p> 
  <p><i></i> Trustpilot</p>
  </div>
  </section>
 


  <div className='order-finaly-data-img'>
  <img src="/images/order/svgexport-8.svg" alt="" />
  </div>
</div>
 
</div>

  <div className="order-user-info">
    <section></section>
    <section></section>
  </div>
</>
  )}
 
{Status404 &&(
  <div style={{height:'50vh',width:'100px'}}></div>
)}
       
        </>
)}
      
{LoaderStatus&&(
  <Loader/>
)}
<Footer/>
    </div>
  )
}
