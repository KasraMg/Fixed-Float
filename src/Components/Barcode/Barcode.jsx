import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'; 
import { useParams } from 'react-router-dom';
import './Barcode.css'
import QRCode from 'react-qr-code';
export default function Barcode() {
  const [details,setDetails]=useState() 
  const [addressBarcode, setaddressBarcode] = useState();
  const [allDataBarcode, setAllDataBarcode] = useState();
  const [firstRequest, setfirstRequest] = useState(true);
  
  let hashChange=useParams() 
  let dataa; 
  useEffect(() => {
    if (hashChange) {
      
        fetch(`   http://testsitexchange.com/api/payment_check.php?payment_id=&hash_change=${hashChange.id}`,{
          method:'POST'
         }).then(res=>res.json())
         .then(data=>{
          setDetails(data) 
          setaddressBarcode(`${data.adress_nowpayment}`) 
          setAllDataBarcode(`${data.symbol1}:${data.adress_nowpayment}?amount=${data.amount_user}`)
       
         })
    
    
     
    }

   if (details) {
    dataa=`${details.adress_nowpayment}` 
  
   }
   
  }, [])

  useEffect(() => {
    if (firstRequest && hashChange) {
       fetch(`   http://testsitexchange.com/api/payment_check.php?payment_id=&hash_change=${hashChange.id}`,{
      method:'POST'
     }).then(res=>res.json())
     .then(data=>{ 
      setDetails(data) 
      setaddressBarcode(`${data.adress_nowpayment}`) 
      setAllDataBarcode(`${data.symbol1}:${data.adress_nowpayment}?amount=${data.amount_user}`)
      console.log(allDataBarcode);
      setfirstRequest(false)
     })
    }
   
  }, [])
  
 
  return (
    <>
    {details && (
       <div className='Barcode'>
 <Tabs
      defaultActiveKey="With-amount"
      id="uncontrolled-tab-example"
    
    > 
     <Tab eventKey="Address" title="Address">
     <QRCode value={addressBarcode}  />
      </Tab>

      <Tab eventKey="With-amount" title="With amount">
      <QRCode value={allDataBarcode} />
      </Tab>
    
    </Tabs>
    </div>
  
    )}
     </>
  )
}
