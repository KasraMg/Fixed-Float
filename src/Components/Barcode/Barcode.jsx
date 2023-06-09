import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {QRCodeSVG} from 'qrcode.react'; 
import { useParams } from 'react-router-dom';
import './Barcode.css'
export default function Barcode() {
  const [details,setDetails]=useState() 
  let hashChange=useParams() 
  let dataa;
  useEffect(() => {
    if (hashChange) {
        fetch(`https://traderplus.info/exchange/api/payment_check.php?payment_id=&hash_change=${hashChange.id}`,{
      method:'POST'
     }).then(res=>res.json())
     .then(data=>{
      console.log(data)
      setDetails(data)  
     })

    }

   if (details) {
    dataa=`${details.adress_nowpayment}` 
    console.log(dataa);
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
     <QRCodeSVG value={dataa}  />
      </Tab>

      <Tab eventKey="With-amount" title="With amount">
      <QRCodeSVG value={`1`}  />
      </Tab>
    
    </Tabs>
    </div>
  
    )}
     </>
  )
}
