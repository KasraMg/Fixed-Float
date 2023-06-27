import React from 'react'
import './AvailableCurrencies.css'
export default function AvailableCurrencies(props) {
  return (
    <div className='AvailableCurrencies'>
      <img src={props.image} alt="" />

      <p>{props.name}</p>
    </div>
  )
}
