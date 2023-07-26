import React, { useState,useEffect,useContext } from 'react'
import SendSelector from '../../Components/index-selector/SendSelector';
import ReciveSelector from '../../Components/index-selector/ReciveSelector'; 
import contextDatas from '../../Context/allData'
import swal from 'sweetalert';
export default function ExchangeAmounts( ) {
    const context =useContext(contextDatas)
    const [SendExchangeDropDown, setSendExchangeDropDown] = useState(false)
    const [ReciveExchangeDropDown, setReciveExchangeDropDown] = useState(false)
    const [sendExchangeValue,setSendExchangeValue] = useState()
    const [AllData,setAllData] = useState() 
    const [ReciveValue,setReciveValue]=useState(0) 
    const [rateusdSend,setRateusdSend]=useState()
    const [rateusdRecive,setRateusdRecive]=useState()
    const [Count, setCount] = useState();
    useEffect(() => {
         if (context.Sendcurrency && context.Recivecurrency  ) { 
           let value =context.Value * context.Sendcurrency.price 
           let newValue=value / context.Recivecurrency.price 
           let lastValue=`${newValue}`
           setReciveValue(lastValue.slice(0,10) )
           let ratecurrceysend=context.Value * context.Sendcurrency.price
           let ratecurrceyrecive=ReciveValue * context.Recivecurrency.price
           let Newratecurrceysend=`${ratecurrceysend}`
           let Newratecurrceyrecive=`${ratecurrceyrecive}`
           setRateusdSend(Newratecurrceysend.slice(0,20))
           setRateusdRecive(Newratecurrceyrecive.slice(0,20))

            
         }
      
    }, [context.Value,context.Sendcurrency])
    useEffect(() => {
        if (ReciveValue) {
                   let ratecurrceysend=context.Value * context.Sendcurrency.price
        let ratecurrceyrecive=ReciveValue * context.Recivecurrency.price
        let Newratecurrceysend=`${ratecurrceysend}`
        let Newratecurrceyrecive=`${ratecurrceyrecive}`
        setRateusdSend(Newratecurrceysend.slice(0,20))
        setRateusdRecive(Newratecurrceyrecive.slice(0,20))
        }
 
    }, [ReciveValue])
    
     
    useEffect(() => {
        setInterval(() => {
        fetch('https://testsitexchange.com/api/market2.json')
        .then(res=>res.json())
        .then(data=>{ 
            setAllData(data) 
            if (Count < 1) {
                context.setSendCurrency(data.Select1[5])
                context.setReciveCurrency(data.Select1[33]) 
            }
          
             
        })
        setCount(prev => prev + 1)
    }, 20000);
    }, [Count])
    useEffect(() => {
        
        fetch('https://testsitexchange.com/api/market2.json')
        .then(res=>res.json())
        .then(data=>{ 
            setAllData(data) 
            context.setSendCurrency(data.Select1[5])
            context.setReciveCurrency(data.Select1[33])
             
        })
         
    }, [])
    const inputChangeHandler=(e)=>{ 
        const regex= RegExp(/^[0-9\.]+$/) 
        const regexStatus = regex.test(e.target.value) 
   if ( context.Value &&  context.Value.length == 1) {
    context.setValue(e.target.value)
   }else{
 if (regexStatus) {
    context.setValue(e.target.value)
    }
   
   }
   
            
          
       
    }

    const changeCurrency=()=>{
        let newSendCurrency={...context.Recivecurrency}
        let newReciveCurrency={...context.Sendcurrency}

        let res= AllData.Select1.find(data=>{
            return data.symbol == context.Recivecurrency.symbol 
        })
        if (res) {
            context.setSendCurrency(newSendCurrency)
            context.setReciveCurrency(newReciveCurrency)
        }else{
            swal({
                title:'This currency cannot be changed',
                icon:'error',
                button:'ok'
            })
        }
            
         
       
    }

   
    
  return (
    <div className="exchange-amounts">
    {/* <!-- exchange input--> */}
    <div>
        <section className="exchange-amounts-lable">
            <p  style={context.Sendcurrency &&{color:context.Sendcurrency.color}}>Send</p>
            <p style={context.Sendcurrency &&{color:context.Sendcurrency.color}}>{context.Sendcurrency  ? context.Sendcurrency.name:'select'}</p>
        </section>
        <div style={{ position: "relative" }}>
            <input style={context.Sendcurrency &&{color:context.Sendcurrency.color}} maxLength={13} autocomplete="off" value={ context.Value } placeholder='0'   onChange={(e)=>inputChangeHandler(e)}
                className="Send-input mt-lg-2" type="text" />

            <lable className="select-outer" onClick={() => setSendExchangeDropDown(true)}>
               {context.Sendcurrency && <img width={30} className='mx-2' src={context.Sendcurrency.image} alt="" />}  
                <p style={context.Sendcurrency &&{color:context.Sendcurrency.color}}>{context.Sendcurrency  ? context.Sendcurrency.symbol: 'select' }</p>

            </lable>
            {AllData&&(
        <SendSelector AllData={AllData} sendExchangeValue={sendExchangeValue} setSendExchangeValue={setSendExchangeValue} setSendExchangeDropDown={setSendExchangeDropDown} SendExchangeDropDown={SendExchangeDropDown} />
            )}
    

        </div>
{context.Sendcurrency ?(
    <div className="exchange-amounts-details">
            <p>1 {context.Sendcurrency.symbol} ≈ {context.Sendcurrency.price}</p>
            <p>${rateusdSend}</p>
        </div>
):(
    <div className="exchange-amounts-details">
    <p>select</p>
     
</div>  
) }
        

    </div>
    {/* <!-- exchange input--> */}

    <div className="btn-reverse-to" onClick={changeCurrency}>
        <span  style={context.Sendcurrency &&{color:context.Sendcurrency.color}}></span>
        <span  style={context.Recivecurrency &&{color:context.Recivecurrency.color}}></span>
    </div>
    {/* <!-- exchange input--> */}
    <div>
        <section className="exchange-amounts-lable" style={{ color: "#fff !important" }} >
            <p style={context.Recivecurrency &&{color:context.Recivecurrency.color}}>Receive</p>
            <p style={context.Recivecurrency &&{color:context.Recivecurrency.color}}>    <p>{context.Recivecurrency  ? context.Recivecurrency.name:'select'}</p></p>
        </section>
        <div style={{ position: "relative" }}>
            <input style={context.Recivecurrency &&{color:context.Recivecurrency.color}} className="Receive-input" placeholder='0'  value={ReciveValue}
                autocomplete="off" type="text" />
            {/* <!-- exchange option --> */}
            <lable className="select-outer recive-select-outer" onClick={() => setReciveExchangeDropDown(true)}>
            {context.Recivecurrency && <img width={30} className='mx-2' src={context.Recivecurrency.image} alt="" />}  
                <p style={context.Recivecurrency &&{color:context.Recivecurrency.color}}>{context.Recivecurrency  ? context.Recivecurrency.symbol: 'select' }</p>

            </lable>

            <ReciveSelector AllData={AllData} setReciveExchangeDropDown={setReciveExchangeDropDown} ReciveExchangeDropDown={ReciveExchangeDropDown} />
            {/* <!-- exchange option --> */}
        </div>
        {context.Recivecurrency ?(
    <div className="exchange-amounts-details">
            <p>1 {context.Recivecurrency.symbol} ≈ {context.Recivecurrency.price}</p>
            <p>${rateusdRecive}</p>
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
