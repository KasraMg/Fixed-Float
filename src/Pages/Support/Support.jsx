import React, { useEffect,useState } from 'react'
import './Support.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import SupportSection from '../../Components/SupportSection/SupportSection' 
export default function Support() {
  const [social,setSocial]=useState()
  useEffect(() => {
    fetch('https://pilbil.com/api/social.php')
    .then(res=>res.json())
    .then(data=>{ 
      console.log(data);
     setSocial(data);
    })
 }, [])
  return (
    <div className='Support'>
      <Header />

    <p className='Support-title'>
    Support
    </p>

    <p className='Support-text'>We are happy to help you sort out any issues 24 hours a day, 7 days a week.</p>
      <main>
        {social && social.social.map((data,index)=>(
            <SupportSection link={data.link} bg={index % 2 === 0 ?'./images/support/svgexport-1.svg' : './images/support/svgexport-2.svg'}>
          <div className='first-SupportSection'>
         <img height={22.5} style={{width:'22.5px',position:'relative',left:'10px'}} src={data.icon} alt="" /> 
          </div>
          <p>{data.comment}</p>
          <span>Start a chat with us now</span>
        

        </SupportSection>
        ))}
      


  
      </main>
      <Footer />
    </div>
  )
}
