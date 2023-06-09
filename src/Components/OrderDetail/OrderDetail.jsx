import React from 'react'
import './OrderDetail.css'
export default function OrderDetail({flash,text,icon}) {
  return (
    <section className={flash ?'OrderDetail-section order-flash':'OrderDetail-section'}>
      <div>
        <i className={icon}></i>
      </div>
      <p>{text}</p>
    </section>
  )
}
