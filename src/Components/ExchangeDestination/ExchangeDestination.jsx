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
    const [showMemoDeleteIcon,setShowMemoDeleteIcon]=useState(false)
    useEffect(() => {
       if (context.address) {
        setShowDeleteIcon(true)
       }else{
        setShowDeleteIcon(false)
       }

       if (context.memo) {
        setShowMemoDeleteIcon(true)
      }else{
        setShowMemoDeleteIcon(false)
      }
    }, [context.address,context.memo])

  

    const exchangeClickHandler=()=>{

      if (!context.address) {
        swal({
          title:'please type the address',
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
        fetch (`https://traderplus.info/exchange/api/payment_create.php?email=${context.userInfos ?context.userInfos.email :''}&adress=${context.address}&amount=${context.Value}&symbol1=${context.Sendcurrency.code}&symbol2=${context.Recivecurrency.symbol}&network2=${context.Recivecurrency.network && context.Recivecurrency.network}&memo=${context.memo && context.memo}`,{

          method:'POST'
        })
        .then(res=> res.json() )
        .then(data=>{ 
          setLoader(false)
          if (data.code==200) {
            navigate(`/order/${data.hash_change}`)
          }else if(data.code==400) {
            swal({
              title:data.message,
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
    const pasteClipboardMemo= async()=>{
      const ClipBoardText=await navigator.clipboard.readText()
      context.setMemo(ClipBoardText)
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
<div className='exchange-Destination-footer'>
   <button className="Exchange-btn" onClick={exchangeClickHandler}>Exchange now</button>
   {context.Recivecurrency && context.Recivecurrency.memo == 1&&(
         <div>
          <p>MEMO (optional)</p>
          <input value={context.memo} onChange={(e)=> context.setMemo(e.target.value)} placeholder='Memo / Tag' type="text" />
          {showMemoDeleteIcon ? (
        <AiOutlineClose className='delete-icon-memo' onClick={()=>context.setMemo('')}/>
      ):(
        <div>
          <span onClick={pasteClipboardMemo}></span> 
        </div>
      )}
        </div>
      )}
</div>
 
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
