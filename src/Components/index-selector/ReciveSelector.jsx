import React,{useState,useEffect} from 'react'
import { useContext } from 'react'
import contextDatas from '../../Context/allData'
import './Selector.css'
export default function ReciveSelector({ReciveExchangeDropDown,setReciveExchangeDropDown,AllData}) {
    const context =useContext(contextDatas)
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
             let newData =AllData && AllData.Select2.filter(data => {
                if (data.name.toLowerCase().includes(inputData) ) {   
                 
                    return data.name.toLowerCase().includes(inputData.toLowerCase()) 
                  
                 
                } else {
                    return data.symbol.toLowerCase().includes(inputData) 
                }
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
    if (context.Sendcurrency && data.name==context.Sendcurrency.name) { 
        context.setReciveCurrency(context.Sendcurrency)
        context.setSendCurrency(context.Recivecurrency)
    }else{
        context.setReciveCurrency(data)
    }
    }

  return (
    
    <div className={ReciveExchangeDropDown ? 'select-option ' : 'select-option select-not-active'}>
    <div className="select-option-bg" onClick={()=>setReciveExchangeDropDown(false)}></div>
    <div className="select-option-input">
        <input  value={inputData} onChange={(e) => filterHandler(e)} type="text" placeholder="Type a currency or ticker"/>
       <img src="./images/index/Capture.PNG" alt=""/>
    </div>

    <main>
        <p className="select-option-title">All currencies</p>
    <ul  onClick={()=>setReciveExchangeDropDown(false)}>
    {showResult && (
                        <>

                            {!inputData && (
                                <>
                                    {AllData && currencyData.Select1.map(data => (
                                        <li className="option active" onClick={()=>setCurrencyHandler(data)} >
                                            <div>
                                                <p style={{color:data.color, position: 'relative', top: '3px'}}>{data.name}</p>
                                                <img width={30} src={data.image} alt="" />
                                            </div>
                                            <div className='selector-network'>
                                         <p>{data.symbol}</p>
                                         <section style={{backgroundColor:data.color}}>
                                               <img width={25} src={data.network_image}alt="" />
                                               <p style={{ color: data.color == '#000000'&&'yellow' }}>{data.network}</p>
                                         </section>
                                    </div>
                                        </li>
                                    ))}
                                </>
                              
                                    )}

                                
                        {inputData &&  result &&(
                                <>
                        {result && result.map(data => (
                                <li className="option active" onClick={()=>setCurrencyHandler(data)} >
                                    <div>
                                        <p style={{color:data.color, position: 'relative', top: '3px'}}>{data.name}</p> 
                                        <img width={30} src={data.image} alt="" />
                                    </div>
                                    <div className='selector-network'>
                                         <p>{data.symbol}</p>
                                          <section style={{backgroundColor:data.color}}>
                                               <img width={25} src={data.network_image}alt="" />
                                               <p style={{ color: data.color == '#000000'&&'yellow' }}>{data.network}</p>
                                         </section>
                                    </div>
                                </li>
                            ))}

                                </>


                        )}
                        {inputData && error &&(
                     
                        <p className='currsy-not-found'>Not Found :((</p>
                           
                        
                            
                        )}
                         
                        
                 
        </>
                )}
 
    </ul>
   
    </main>
   

</div>
  )
}
