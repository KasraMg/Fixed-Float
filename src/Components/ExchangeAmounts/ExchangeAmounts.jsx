import React, { useState,useEffect } from 'react'
import SendSelector from '../../Components/index-selector/SendSelector';
import ReciveSelector from '../../Components/index-selector/ReciveSelector';
import { useContext } from 'react'
import contextDatas from '../../Context/allData'
export default function ExchangeAmounts( ) {
    const context =useContext(contextDatas)
    const [SendExchangeDropDown, setSendExchangeDropDown] = useState(false)
    const [ReciveExchangeDropDown, setReciveExchangeDropDown] = useState(false)
    const [sendExchangeValue,setSendExchangeValue] = useState()
    const [AllData,setAllData] = useState()
    const [Value,setValue]=useState()
    const [ReciveValue,setReciveValue]=useState(0) 
    useEffect(() => {
         if (context.Sendcurrency && context.Recivecurrency  ) {
            console.log('3');
           let value = Value / context.Sendcurrency.price
           let newValue=value * context.Recivecurrency.price
           let lastValue=`${newValue}`
           setReciveValue(lastValue.slice(7,20) )
     
         }
      
    }, [Value])
    
     
    useEffect(() => {
        fetch('https://traderplus.info/exchange/api/market.json')
        .then(res=>res.json())
        .then(data=>{
            setAllData(data)
            console.log(data)
             
        })
    }, [])
    
    const inputChangeHandler=(e)=>{ 
        const regex= RegExp(/^\d+$/) 
        const regexStatus = regex.test(e.target.value)
        console.log(regexStatus);
   if (Value && Value.length == 1) {
    setValue(e.target.value)
   }else{
 if (regexStatus) {
        setValue(e.target.value)
    }
   
   }
   
            
          
       
    }
  return (
    <div className="exchange-amounts">
    {/* <!-- exchange input--> */}
    <div>
        <section className="exchange-amounts-lable">
            <p>Send</p>
            <p>{context.Sendcurrency  ? context.Sendcurrency.symbol:'select'}</p>
        </section>
        <div style={{ position: "relative" }}>
            <input  autocomplete="off" value={Value} placeholder='0'   onChange={(e)=>inputChangeHandler(e)}
                className="Send-input mt-lg-2" type="text" />

            <lable className="select-outer" onClick={() => setSendExchangeDropDown(true)}>
               {context.Sendcurrency && <img width={30} className='mx-2' src={context.Sendcurrency.image} alt="" />}  
                <p>{context.Sendcurrency  ? context.Sendcurrency.symbol: 'select' }</p>

            </lable>
            {AllData&&(
        <SendSelector AllData={AllData} sendExchangeValue={sendExchangeValue} setSendExchangeValue={setSendExchangeValue} setSendExchangeDropDown={setSendExchangeDropDown} SendExchangeDropDown={SendExchangeDropDown} />
            )}
    

        </div>
{context.Sendcurrency ?(
    <div className="exchange-amounts-details">
            <p>1 {context.Sendcurrency.symbol} ≈ {context.Sendcurrency.price}</p>
            <p>$ 49.98</p>
        </div>
):(
    <div className="exchange-amounts-details">
    <p>select</p>
     
</div>  
) }
        

    </div>
    {/* <!-- exchange input--> */}

    <div className="btn-reverse-to">
        <span></span>
        <span></span>
    </div>
    {/* <!-- exchange input--> */}
    <div>
        <section className="exchange-amounts-lable" style={{ color: "#fff !important" }} >
            <p>Receive</p>
            <p>    <p>{context.Recivecurrency  ? context.Recivecurrency.symbol:'select'}</p></p>
        </section>
        <div style={{ position: "relative" }}>
            <input className="Receive-input" placeholder='0'  value={ReciveValue}
                autocomplete="off" type="text" />
            {/* <!-- exchange option --> */}
            <lable className="select-outer recive-select-outer" onClick={() => setReciveExchangeDropDown(true)}>
            {context.Recivecurrency && <img width={30} className='mx-2' src={context.Recivecurrency.image} alt="" />}  
                <p>{context.Recivecurrency  ? context.Recivecurrency.symbol: 'select' }</p>

            </lable>

            <ReciveSelector AllData={AllData} setReciveExchangeDropDown={setReciveExchangeDropDown} ReciveExchangeDropDown={ReciveExchangeDropDown} />
            {/* <!-- exchange option --> */}
        </div>
        {context.Recivecurrency ?(
    <div className="exchange-amounts-details">
            <p>1 {context.Recivecurrency.symbol} ≈ {context.Recivecurrency.price}</p>
            <p>$ 49.98</p>
        </div>
):(
    <div className="exchange-amounts-details">
    <p>select</p>
     
</div>  
) }
        
    </div>
    {/* <!-- exchange input--> */}
</div>

  )
}
