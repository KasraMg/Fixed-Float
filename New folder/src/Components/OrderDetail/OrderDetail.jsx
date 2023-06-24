import React from 'react'
import './OrderDetail.css'
export default function OrderDetail({flash,text,icon,dark}) {
  return (
    <section style={{opacity:dark ? '.2' : '1'}} className={flash ?'OrderDetail-section order-flash':'OrderDetail-section'}>
      <div>
        <i className={icon}></i>
      </div>
      <p>{text}</p>
    </section>
  )
}
