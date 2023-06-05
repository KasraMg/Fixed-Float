import React from 'react'
import './Selector.css'
import { useContext } from 'react'
import contextDatas from '../../Context/allData'
import { useState } from 'react'
import { useEffect } from 'react'


export default function SendSelector({ SendExchangeDropDown, setSendExchangeDropDown, AllData }) {
    const [inputData, setInputData] = useState()
    const [result, setresult] = useState()
    const context = useContext(contextDatas)
    const [showResult, setshowResult] = useState(true)
    const [error, setError] = useState(true)
    const currencyData = { ...AllData }
    const filterHandler = (e) => {
        setInputData(e.target.value)

    }

    useEffect(() => { 
        if (inputData) {
             let newData = AllData.Select1.filter(data => {
            return data.symbol.includes(inputData.toUpperCase()) 
        })
        setresult(newData)
      
        
        console.log(result);
        }
       
    }, [inputData])

 useEffect(() => {
    if (result && result.length) {
        setError(false)
    }else{
        setError(true)
       
    }
 }, [result])
 

    return (
        <div className={SendExchangeDropDown ? 'select-option ' : 'select-option select-not-active'}>
            <div className="select-option-bg" onClick={() => setSendExchangeDropDown(false)}></div>
            <div className="select-option-input">
                <input value={inputData} onChange={(e) => filterHandler(e)} type="text" placeholder="Type a currency or ticker" />
                <img   src="./images/index/Capture.PNG" alt="" />
            </div>

            <main>
                <p className="select-option-title">Popular currencies</p>
                <ul onClick={() => setSendExchangeDropDown(false)}>
                    {showResult && (
                        <>

                            {!inputData && (
                                <>
                                    {AllData && currencyData.Select1.map(data => (
                                        <li className="option active" onClick={() => context.setSendCurrency(data)} >
                                            <div>
                                                <p style={{ position: 'relative', top: '3px' }}>{data.symbol}</p>
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" baseProfile="basic" viewBox="0 0 256 256"><path fill="#F7931A" d="M252.2 159c-17.1 68.6-86.6 110.3-155.1 93.2C28.5 235.1-13.3 165.6 3.8 97 20.9 28.5 90.4-13.3 159 3.8c68.5 17.1 110.3 86.6 93.2 155.2z"/><path fill="#FFF" d="M184.4 109.8c2.5-17-10.4-26.2-28.2-32.3l5.8-23.1-14-3.5-5.6 22.5c-3.7-.9-7.5-1.8-11.2-2.6l5.6-22.6-14-3.5-5.8 23c-3.1-.7-6.1-1.4-9-2.1v-.1l-19.4-4.8-3.7 15s10.4 2.4 10.2 2.5c5.7 1.4 6.7 5.2 6.5 8.2L95 112.7c.4.1.9.2 1.5.5l-1.5-.4-9.2 36.8c-.7 1.7-2.5 4.3-6.4 3.3.1.2-10.2-2.5-10.2-2.5l-7 16.1 18.3 4.6c3.4.9 6.7 1.7 10 2.6L84.7 197l14 3.5 5.8-23.1c3.8 1 7.5 2 11.2 2.9l-5.7 23 14 3.5 5.8-23.3c24 4.5 42 2.7 49.5-19 6.1-17.4-.3-27.5-12.9-34.1 9.3-2.1 16.2-8.2 18-20.6zm-32 45c-4.3 17.4-33.7 8-43.2 5.6l7.7-30.9c9.5 2.4 40 7.1 35.5 25.3zm4.3-45.3c-4 15.9-28.4 7.8-36.3 5.8l7-28c7.9 2 33.4 5.7 29.3 22.2z"/></svg>
        */}
                                                <img width={30} src={data.image} alt="" />
                                            </div>
                                            <p>BTC</p>
                                        </li>
                                    ))}
                                </>
                              
                                    )}

                                
                        {inputData &&  result &&(
                                <>
                        {result && result.map(data => (
                                <li className="option active" onClick={() => context.setSendCurrency(data)} >
                                    <div>
                                        <p style={{ position: 'relative', top: '3px' }}>{data.symbol}</p>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" baseProfile="basic" viewBox="0 0 256 256"><path fill="#F7931A" d="M252.2 159c-17.1 68.6-86.6 110.3-155.1 93.2C28.5 235.1-13.3 165.6 3.8 97 20.9 28.5 90.4-13.3 159 3.8c68.5 17.1 110.3 86.6 93.2 155.2z"/><path fill="#FFF" d="M184.4 109.8c2.5-17-10.4-26.2-28.2-32.3l5.8-23.1-14-3.5-5.6 22.5c-3.7-.9-7.5-1.8-11.2-2.6l5.6-22.6-14-3.5-5.8 23c-3.1-.7-6.1-1.4-9-2.1v-.1l-19.4-4.8-3.7 15s10.4 2.4 10.2 2.5c5.7 1.4 6.7 5.2 6.5 8.2L95 112.7c.4.1.9.2 1.5.5l-1.5-.4-9.2 36.8c-.7 1.7-2.5 4.3-6.4 3.3.1.2-10.2-2.5-10.2-2.5l-7 16.1 18.3 4.6c3.4.9 6.7 1.7 10 2.6L84.7 197l14 3.5 5.8-23.1c3.8 1 7.5 2 11.2 2.9l-5.7 23 14 3.5 5.8-23.3c24 4.5 42 2.7 49.5-19 6.1-17.4-.3-27.5-12.9-34.1 9.3-2.1 16.2-8.2 18-20.6zm-32 45c-4.3 17.4-33.7 8-43.2 5.6l7.7-30.9c9.5 2.4 40 7.1 35.5 25.3zm4.3-45.3c-4 15.9-28.4 7.8-36.3 5.8l7-28c7.9 2 33.4 5.7 29.3 22.2z"/></svg>
                           */}
                                        <img width={30} src={data.image} alt="" />
                                    </div>
                                    <p>BTC</p>
                                </li>
                            ))}

                                </>


                        )}
                        { error &&(
                     
                        <p className='currsy-not-found'>Not Found :((</p>
                           
                        
                            
                        )}
                         
                        
                 
        </>
                )}

  
 
                </ul>
                {/* <p className="select-option-title">All currencies</p>
    <ul>
        <li className="option active">
            <div>
                <p>Bitcoin</p>
                <svg xmlns="http://www.w3.org/2000/svg" baseProfile="basic" viewBox="0 0 256 256"><path fill="#F7931A" d="M252.2 159c-17.1 68.6-86.6 110.3-155.1 93.2C28.5 235.1-13.3 165.6 3.8 97 20.9 28.5 90.4-13.3 159 3.8c68.5 17.1 110.3 86.6 93.2 155.2z"/><path fill="#FFF" d="M184.4 109.8c2.5-17-10.4-26.2-28.2-32.3l5.8-23.1-14-3.5-5.6 22.5c-3.7-.9-7.5-1.8-11.2-2.6l5.6-22.6-14-3.5-5.8 23c-3.1-.7-6.1-1.4-9-2.1v-.1l-19.4-4.8-3.7 15s10.4 2.4 10.2 2.5c5.7 1.4 6.7 5.2 6.5 8.2L95 112.7c.4.1.9.2 1.5.5l-1.5-.4-9.2 36.8c-.7 1.7-2.5 4.3-6.4 3.3.1.2-10.2-2.5-10.2-2.5l-7 16.1 18.3 4.6c3.4.9 6.7 1.7 10 2.6L84.7 197l14 3.5 5.8-23.1c3.8 1 7.5 2 11.2 2.9l-5.7 23 14 3.5 5.8-23.3c24 4.5 42 2.7 49.5-19 6.1-17.4-.3-27.5-12.9-34.1 9.3-2.1 16.2-8.2 18-20.6zm-32 45c-4.3 17.4-33.7 8-43.2 5.6l7.7-30.9c9.5 2.4 40 7.1 35.5 25.3zm4.3-45.3c-4 15.9-28.4 7.8-36.3 5.8l7-28c7.9 2 33.4 5.7 29.3 22.2z"/></svg>
            </div>
            <p>BTC</p>
        </li>
        <li className="option">
            <div>
                <p>Bitcoin</p>
                <svg xmlns="http://www.w3.org/2000/svg" baseProfile="basic" viewBox="0 0 256 256"><path fill="#F7931A" d="M252.2 159c-17.1 68.6-86.6 110.3-155.1 93.2C28.5 235.1-13.3 165.6 3.8 97 20.9 28.5 90.4-13.3 159 3.8c68.5 17.1 110.3 86.6 93.2 155.2z"/><path fill="#FFF" d="M184.4 109.8c2.5-17-10.4-26.2-28.2-32.3l5.8-23.1-14-3.5-5.6 22.5c-3.7-.9-7.5-1.8-11.2-2.6l5.6-22.6-14-3.5-5.8 23c-3.1-.7-6.1-1.4-9-2.1v-.1l-19.4-4.8-3.7 15s10.4 2.4 10.2 2.5c5.7 1.4 6.7 5.2 6.5 8.2L95 112.7c.4.1.9.2 1.5.5l-1.5-.4-9.2 36.8c-.7 1.7-2.5 4.3-6.4 3.3.1.2-10.2-2.5-10.2-2.5l-7 16.1 18.3 4.6c3.4.9 6.7 1.7 10 2.6L84.7 197l14 3.5 5.8-23.1c3.8 1 7.5 2 11.2 2.9l-5.7 23 14 3.5 5.8-23.3c24 4.5 42 2.7 49.5-19 6.1-17.4-.3-27.5-12.9-34.1 9.3-2.1 16.2-8.2 18-20.6zm-32 45c-4.3 17.4-33.7 8-43.2 5.6l7.7-30.9c9.5 2.4 40 7.1 35.5 25.3zm4.3-45.3c-4 15.9-28.4 7.8-36.3 5.8l7-28c7.9 2 33.4 5.7 29.3 22.2z"/></svg>
            </div>
            <p>BTC</p>
        </li>
        <li className="option">
            <div>
                <p>Bitcoin</p>
                <svg xmlns="http://www.w3.org/2000/svg" baseProfile="basic" viewBox="0 0 256 256"><path fill="#F7931A" d="M252.2 159c-17.1 68.6-86.6 110.3-155.1 93.2C28.5 235.1-13.3 165.6 3.8 97 20.9 28.5 90.4-13.3 159 3.8c68.5 17.1 110.3 86.6 93.2 155.2z"/><path fill="#FFF" d="M184.4 109.8c2.5-17-10.4-26.2-28.2-32.3l5.8-23.1-14-3.5-5.6 22.5c-3.7-.9-7.5-1.8-11.2-2.6l5.6-22.6-14-3.5-5.8 23c-3.1-.7-6.1-1.4-9-2.1v-.1l-19.4-4.8-3.7 15s10.4 2.4 10.2 2.5c5.7 1.4 6.7 5.2 6.5 8.2L95 112.7c.4.1.9.2 1.5.5l-1.5-.4-9.2 36.8c-.7 1.7-2.5 4.3-6.4 3.3.1.2-10.2-2.5-10.2-2.5l-7 16.1 18.3 4.6c3.4.9 6.7 1.7 10 2.6L84.7 197l14 3.5 5.8-23.1c3.8 1 7.5 2 11.2 2.9l-5.7 23 14 3.5 5.8-23.3c24 4.5 42 2.7 49.5-19 6.1-17.4-.3-27.5-12.9-34.1 9.3-2.1 16.2-8.2 18-20.6zm-32 45c-4.3 17.4-33.7 8-43.2 5.6l7.7-30.9c9.5 2.4 40 7.1 35.5 25.3zm4.3-45.3c-4 15.9-28.4 7.8-36.3 5.8l7-28c7.9 2 33.4 5.7 29.3 22.2z"/></svg>
            </div>
            <p>BTC</p>
        </li>
        <li className="option">
            <div>
                <p>Bitcoin</p>
                <svg xmlns="http://www.w3.org/2000/svg" baseProfile="basic" viewBox="0 0 256 256"><path fill="#F7931A" d="M252.2 159c-17.1 68.6-86.6 110.3-155.1 93.2C28.5 235.1-13.3 165.6 3.8 97 20.9 28.5 90.4-13.3 159 3.8c68.5 17.1 110.3 86.6 93.2 155.2z"/><path fill="#FFF" d="M184.4 109.8c2.5-17-10.4-26.2-28.2-32.3l5.8-23.1-14-3.5-5.6 22.5c-3.7-.9-7.5-1.8-11.2-2.6l5.6-22.6-14-3.5-5.8 23c-3.1-.7-6.1-1.4-9-2.1v-.1l-19.4-4.8-3.7 15s10.4 2.4 10.2 2.5c5.7 1.4 6.7 5.2 6.5 8.2L95 112.7c.4.1.9.2 1.5.5l-1.5-.4-9.2 36.8c-.7 1.7-2.5 4.3-6.4 3.3.1.2-10.2-2.5-10.2-2.5l-7 16.1 18.3 4.6c3.4.9 6.7 1.7 10 2.6L84.7 197l14 3.5 5.8-23.1c3.8 1 7.5 2 11.2 2.9l-5.7 23 14 3.5 5.8-23.3c24 4.5 42 2.7 49.5-19 6.1-17.4-.3-27.5-12.9-34.1 9.3-2.1 16.2-8.2 18-20.6zm-32 45c-4.3 17.4-33.7 8-43.2 5.6l7.7-30.9c9.5 2.4 40 7.1 35.5 25.3zm4.3-45.3c-4 15.9-28.4 7.8-36.3 5.8l7-28c7.9 2 33.4 5.7 29.3 22.2z"/></svg>
            </div>
            <p>BTC</p>
        </li>
    </ul>  */}
            </main>


        </div>
    )
}
