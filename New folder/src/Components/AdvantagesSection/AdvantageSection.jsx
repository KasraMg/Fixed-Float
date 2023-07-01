import React from 'react'
import './AdvantageSection.css'

export default function AdvantageSection({text,icon}) {
  return (
    <div className='AdvantageSection'>
      <div>
   {icon}
      </div>
      <p>{text}</p>
    </div>
  )
}
