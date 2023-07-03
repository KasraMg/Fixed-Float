 import React,{ useEffect,useState,useContext } from 'react' 
import { AiOutlineClose } from 'react-icons/ai'
import './ExchangeDestination.css'
import swal from 'sweetalert'
import allData from '../../Context/allData'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../Loader/Loader'
export default function ExchangeDestination() {
const [LoaderStatus, setLoader] = useState(false);
const navigate=useNavigate()
const context =useContext(allData) 
    const [showDeleteIcon,setShowDeleteIcon]=useState(false)
    useEffect(() => {
       if (context.address) {
        setShowDeleteIcon(true)
       }else{
        setShowDeleteIcon(false)
       }
    }, [context.address])
    

    const exchangeClickHandler=()=>{

      if (!context.address) {
        swal({
          title:'please type the context.address',
          icon:'error',
          buttons:'try again'
        })
      }else if(!context.Recivecurrency ){
        swal({
          title:'please select your currency',
          icon:'error',
          buttons:'try again'
        })
      }else if(!context.Sendcurrency){
        swal({
          title:'please select your currency',
          icon:'error',
          buttons:'try again'
        })
      }else if(!context.Value){
        swal({
          title:'please type amounts',
          icon:'error',
          buttons:'try again'
        })
      }else{
        setLoader(true)
        fetch (`https://traderplus.info/exchange/api/payment_create.php?email=${context.userInfos ?context.userInfos.email :''}&adress=${context.address}&amount=${context.Value}&symbol1=${context.Sendcurrency.symbol}&symbol2=${context.Recivecurrency.symbol}&network2=${context.Recivecurrency.network && context.Recivecurrency.network}`,{

          method:'POST'
        })
        .then(res=> res.json() )
        .then(data=>{
          console.log(data)
          setLoader(false)
          if (data.code==200) {
            navigate(`/order/${data.hash_change}`)
          }else if(data.code==400) {
            swal({
              title:'The operation failed',
              icon:'error',
              buttons:'try again'
            })
          }
        })
      }
     
    }

    const pasteClipboard=async()=>{
      const ClipBoardText=await navigator.clipboard.readText()
      context.setAddress(ClipBoardText)
    }
  return (

    <>
      {/* <!-- exchange-Destination --> */}
      <div className="exchange-Destination">
      <p className="exchange-Destination-title">Destination</p>
      <input placeholder={context.Recivecurrency ? `Your ${context.Recivecurrency.name} address` : `Select your Currency`} value={context.address} onChange={(e)=> context.setAddress(e.target.value)} type="text" />
      {showDeleteIcon ? (
        <AiOutlineClose className='delete-icon' onClick={()=>context.setAddress('')}/>
      ):(
        <div>
          <span onClick={pasteClipboard}></span> 
        </div>
      )}
        
  </div>

  <button className="Exchange-btn" onClick={exchangeClickHandler}>Exchange now</button>
  {/* <!-- exchange-Destination --> */}
  <div className="terms">
      <p>By using the site and creating an exchange, you agree to the
          FixedFloat's <Link to="/FAQ">FAQ</Link> and <Link
              to="/Privacy-Policy">Privacy Policy</Link></p>
  </div>

  {LoaderStatus&&(
  <Loader/>
)}
  </>
  )
}
