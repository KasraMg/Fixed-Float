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
 
const setCurrencyHandler=(data) => {
    console.log(data);
    if (context.Recivecurrency && data.symbol==context.Recivecurrency.symbol) { 
        context.setSendCurrency(context.Recivecurrency)
        context.setReciveCurrency(context.Sendcurrency)
    }else{
        context.setSendCurrency(data)
    }
    }
   
    return (
        <div className={SendExchangeDropDown ? 'select-option ' : 'select-option select-not-active'}>
            <div className="select-option-bg" onClick={() => setSendExchangeDropDown(false)}></div>
            <div className="select-option-input">
                <input value={inputData} onChange={(e) => filterHandler(e)} type="text" placeholder="Type a currency or ticker" />
                <img   src="./images/index/Capture.PNG" alt="" />
            </div>

            <main>
                <p className="select-option-title">All currencies</p>
                <ul onClick={() => setSendExchangeDropDown(false)}>
                    {showResult && (
                        <>

                            {!inputData && (
                                <>
                                    {AllData && currencyData.Select1.map(data => (
                                        <li className="option active" onClick={()=>setCurrencyHandler(data)} >
                                            <div>
                                                <p style={{ position: 'relative', top: '3px' }}>{data.name}</p>
                                                <img width={30} src={data.image} alt="" />
                                            </div>
                                            <p>{data.symbol}</p>
                                        </li>
                                    ))}
                                </>
                              
                                    )}

                                
                        {inputData &&  result &&(
                                <>
                        {result && result.map(data => (
                                <li className="option active" onClick={()=>setCurrencyHandler(data)} >
                                    <div>
                                        <p style={{ position: 'relative', top: '3px' }}>{data.symbol}</p>                          
                                        <img width={30} src={data.image} alt="" />
                                    </div>
                                    <p>{data.symbol}</p>
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
             
            </main>


        </div>
    )
}
