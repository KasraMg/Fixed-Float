import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Barcode.css'
export default function Barcode() {
  return (
    <div className='Barcode'>
 <Tabs
      defaultActiveKey="With-amount"
      id="uncontrolled-tab-example"
    
    > 
     <Tab eventKey="Address" title="Address">
    <img src="../../images/order/download.png" alt="" />
      </Tab>

      <Tab eventKey="With-amount" title="With amount">
      <img src="../../images/order/download.png" alt="" />
      </Tab>
    
    </Tabs>
    </div>
  )
}
