import React from 'react'
import './SupportSection.css'
export default function SupportSection({children,bg,link}) {
  console.log(bg);
  return (
    <div className='SupportSection' style={{background:`url(${bg})`}}>
      {children}
      <a href={link}><button>Go</button></a>
    </div>
  )
}
