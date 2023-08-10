import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import contextDatas from '../../Context/allData'
import './Selector.css'
export default function ReciveSelector({ ReciveExchangeDropDown, setReciveExchangeDropDown, AllData }) {
    const context = useContext(contextDatas)
    const [inputData, setInputData] = useState()
    const [result, setresult] = useState()
    const [showResult, setshowResult] = useState(true)
    const [error, setError] = useState(true)
    const currencyData = { ...AllData }
    const filterHandler = (e) => {
        setInputData(e.target.value)

    }

    useEffect(() => {
        if (inputData) {
            let newData = AllData.Select2.filter(data => {
                if (data.name.toLowerCase().includes(inputData.toLowerCase()) || data.symbol.toLowerCase().includes(inputData.toLowerCase())) {
                    console.log(inputData.toLowerCase());
                    if (data.name.toLowerCase().includes(inputData.toLowerCase())) {
                        return data.name.toLowerCase().includes(inputData.toLowerCase())
                    } else {
                        return data.symbol.toLowerCase().includes(inputData.toLowerCase())
                    }

                } else {
                    if (data.name.toUpperCase().includes(inputData)) {
                        return data.name.toUpperCase().includes(inputData.toUpperCase())
                    } else {
                        return data.symbol.toUpperCase().includes(inputData.toUpperCase())
                    }
                }

            }) 
            setresult(newData)


        }

    }, [inputData])

    useEffect(() => {
        if (result && result.length) {
            setError(false)
        } else {
            setError(true)

        }
    }, [result])

    const setCurrencyHandler = (data) => {
        console.log(data);
        if (context.Sendcurrency && data.name == context.Sendcurrency.name) {
            context.setReciveCurrency(context.Sendcurrency)
            context.setSendCurrency(context.Recivecurrency)
        } else {
            context.setReciveCurrency(data)
        }
    }

    return (

        <div className={ReciveExchangeDropDown ? 'select-option ' : 'select-option select-not-active'}>
            <div className="select-option-bg" onClick={() => setReciveExchangeDropDown(false)}></div>
            <div className="select-option-input">
                <input value={inputData} onChange={(e) => filterHandler(e)} type="text" placeholder="Type a currency or ticker" />
                <img src="./images/index/Capture.PNG" alt="" />
            </div>

            <main style={{ overflow: 'hidden' }}>
            {!inputData &&(
                    <p className="select-option-title">Popular currencies</p>
                )}
                
                <ul onClick={() => setReciveExchangeDropDown(false)}>
                    {AllData && !inputData && currencyData.Select2.map(data => (
                        <li style={data.pin == 1 ? null:{display:'none'}}   className="option active" onClick={() => setCurrencyHandler(data)} >
                            <div>
                                <p style={{ color: data.color, position: 'relative', top: '3px',fontSize:'1.1rem' }} >{data.name}</p>
                                <img width={30} src={data.image} alt="" />
                            </div>
                            <div className='selector-network'>
                                <p>{data.symbol}</p>
                                {data.network_image && (
                                    <section >
                                        <img width={25} src={data.network_image} alt="" />
                                   
                                    </section>
                                )}


                            </div>
                        </li>
                    ))} 
                    {showResult && (
                        <>
                           
                            {!inputData && (
                                <>
                                <p className="select-option-title mt-0 pt-3">All currencies</p>
                                    {AllData && currencyData.Select2.map(data => (
                                        <li style={data.pin == 0 ? null:{display:'none'}}    className="option active" onClick={() => setCurrencyHandler(data)} >
                                            <div>
                                                <p style={{ color: data.color, position: 'relative', top: '3px',fontSize:'1.1rem' }}>{data.name}</p>
                                                <img width={30} src={data.image} alt="" />
                                            </div>
                                            <div className='selector-network'>
                                                <p>{data.symbol}</p>
                                                {data.network_image && (
                                                    <section >
                                                        <img width={25} src={data.network_image} alt="" />
                                                   
                                                    </section>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </>

                            )}


                            {inputData && result && (
                                <>
                                 <p className="select-option-title mt-0 pt-3">Found currencies</p>
                                    {result && result.map(data => (
                                        <li  className="option active" onClick={() => setCurrencyHandler(data)} >
                                            <div>
                                                <p style={{ color: data.color, position: 'relative', top: '3px',fontSize:'1.1rem' }}>{data.name}</p>
                                                <img width={30} src={data.image} alt="" />
                                            </div>
                                            <div className='selector-network'>
                                                <p>{data.symbol}</p>
                                                {data.network_image && (
                                                    <section >
                                                        <img width={25} src={data.network_image} alt="" />
                                                   
                                                    </section>
                                                )}
                                            </div>
                                        </li>
                                    ))}

                                </>


                            )}
                            {inputData && error && (

                                <p className='currsy-not-found mt-5'>Not Found :((</p>



                            )}



                        </>
                    )}

                </ul>

            </main>


        </div>
    )
}
