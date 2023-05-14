import React,{useState} from 'react'
import RecentItem from '../../Components/index-recent-trac-item/RecentItem'
import './Index.css'
import SendSelector from '../../Components/index-selector/SendSelector';
import ReciveSelector from '../../Components/index-selector/ReciveSelector';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../../Components/Header/Header';
export default function Index() {
    const [SendExchangeDropDown,setSendExchangeDropDown]=useState(false)
    const [ReciveExchangeDropDown,setReciveExchangeDropDown]=useState(false)



  return (
    <div>
        <Header/>
        <img className="exchange-form-outer-background"
    src="https://fixedfloat.com/assets/images/background/main_bg.svg"
    alt=""/>
    {/* <!-- exchange-form --> */}
    <div className="exchange-form-outer-container exchange-form-outer">
    
    <p className="exchange-form-outer-title">
        Lightning cryptocurrency exchange
    
    </p>
    
    
    <div className="exchange-amounts">
        {/* <!-- exchange input--> */}
        <div>
            <section className="exchange-amounts-lable">
                <p>Send</p>
                <p>Bitcoin</p>
            </section>
            <div style={{position: "relative"}}>
                <input value="0.00182432" autocomplete="off"
                className="Send-input" type="text"/>
    
                <lable className="select-outer" onClick={()=>setSendExchangeDropDown(true)}>
                <img  style={{width:'30px',position:'relative',right:'3px'}} src="../../images/index/icons8-bitcoin-25.png" alt="" />
                   <p>BTC</p>
    
                </lable> 
                 <SendSelector setSendExchangeDropDown={setSendExchangeDropDown} SendExchangeDropDown={SendExchangeDropDown}/>
              
            </div>
           
            <div className="exchange-amounts-details">
                <p>1 BTC ≈ 14.7651829 ETH</p>
                <p>$ 49.98</p>
            </div>
    
        </div>
        {/* <!-- exchange input--> */}
    
        <div className="btn-reverse-to">
            <span></span>
            <span></span>
        </div>
        {/* <!-- exchange input--> */}
        <div>
            <section className="exchange-amounts-lable" style={{color: "#fff !important"}} >
                <p>Receive</p>
                <p>Ethereum</p>
            </section>
            <div style={{position: "relative"}}>
                <input className="Receive-input" value="≈0.0259461"
                autocomplete="off" type="text"/>
                {/* <!-- exchange option --> */}
                <lable className="select-outer recive-select-outer"  onClick={()=>setReciveExchangeDropDown(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" baseProfile="basic" viewBox="0 0 256 256"><path fill="#F7931A" d="M252.2 159c-17.1 68.6-86.6 110.3-155.1 93.2C28.5 235.1-13.3 165.6 3.8 97 20.9 28.5 90.4-13.3 159 3.8c68.5 17.1 110.3 86.6 93.2 155.2z"/><path fill="#FFF" d="M184.4 109.8c2.5-17-10.4-26.2-28.2-32.3l5.8-23.1-14-3.5-5.6 22.5c-3.7-.9-7.5-1.8-11.2-2.6l5.6-22.6-14-3.5-5.8 23c-3.1-.7-6.1-1.4-9-2.1v-.1l-19.4-4.8-3.7 15s10.4 2.4 10.2 2.5c5.7 1.4 6.7 5.2 6.5 8.2L95 112.7c.4.1.9.2 1.5.5l-1.5-.4-9.2 36.8c-.7 1.7-2.5 4.3-6.4 3.3.1.2-10.2-2.5-10.2-2.5l-7 16.1 18.3 4.6c3.4.9 6.7 1.7 10 2.6L84.7 197l14 3.5 5.8-23.1c3.8 1 7.5 2 11.2 2.9l-5.7 23 14 3.5 5.8-23.3c24 4.5 42 2.7 49.5-19 6.1-17.4-.3-27.5-12.9-34.1 9.3-2.1 16.2-8.2 18-20.6zm-32 45c-4.3 17.4-33.7 8-43.2 5.6l7.7-30.9c9.5 2.4 40 7.1 35.5 25.3zm4.3-45.3c-4 15.9-28.4 7.8-36.3 5.8l7-28c7.9 2 33.4 5.7 29.3 22.2z"/></svg>
                   <p>BTC</p>
    
                </lable> 
                 
                <ReciveSelector setReciveExchangeDropDown={setReciveExchangeDropDown} ReciveExchangeDropDown={ReciveExchangeDropDown}/>
                     {/* <!-- exchange option --> */}
            </div>
            
            <div className="exchange-amounts-details">
                <p>1 ETH ≈ 0.06705006 BTC</p>
                <p>$ 47.91</p>
            </div>
        </div>
        {/* <!-- exchange input--> */}
    </div>
    
    
    
    
    {/* <!-- exchange-Destination --> */}
    <div className="exchange-Destination">
        <p className="exchange-Destination-title">Destination</p>
        <input placeholder="Your Ethereum address" type="text"/>
        <div>
            <span></span>
            <span></span>
        </div>
    </div>
    
    <button className="Exchange-btn" disabled>Exchange now</button>
    {/* <!-- exchange-Destination --> */}
    <div className="terms">
        <p>By using the site and creating an exchange, you agree to the
            FixedFloat's <a href="">Terms of Services</a> and <a
                href="">Privacy Policy</a></p>
    </div>
    </div>
    {/* <!-- exchange-form -->*/}

    <div class="background-svg">
    <img src="../../images/index/svgexport-74.svg" alt="" />
    <img src="../../images/index/svgexport-73.svg" alt="" />
    </div>
    
    
    
    
    <main class="index-main">
    
    {/* <!-- advantages --> */}
    <section class="advantages">
        <p class="advantages-title">Trusted since 2018</p>
        <div class="advantages-inner">
            <div>
                <img src="../../images/index/svgexport-68.svg" alt="" />
    
                <main>
                    <p>Save time</p>
                    <span>Maximum exchange speed due to the full
                        automation</span>
                </main>
            </div>
    
            <div>
              <img src="../../images/index/svgexport-70.svg" alt="" />
    
                <main>
                    <p>Make an exchange</p>
                    <span>Pick the right strategy and make favourable
                        trades</span>
                </main>
    
            </div>
    
            <div>
               <img src="../../images/index/svgexport-72.svg" alt="" />
    
                <main>
                    <p>Save money</p>
                    <span>Best exchange rates and minimum commissions</span>
                </main>
    
            </div>
        </div>
    </section>
    {/* <!-- advantages --> */}

       {/* <!-- Recent-transactions --> */}
       <section class="Recent-transactions">
        <p class="Recent-transactions-title">Recent transactions</p>
        <ul>
        <RecentItem/>
        <RecentItem/>
        <RecentItem/>
        <RecentItem/>
        <RecentItem/>
        <RecentItem/>
        <RecentItem/>
        <RecentItem/>
    </ul>
    
    </section>
    {/* <!-- Recent-transactions --> */}
    
       {/* <!-- index-faq --> */}
       <section class="index-faq">
    <p class="index-faq-title">FAQ</p>
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
    <Accordion.Header><span>1</span>
              <p>How can I track my order?</p></Accordion.Header>
    <Accordion.Body>
    In three ways: by email (if you leave your email address), on our website (if your browser accepts cookies) or by viewing the transactions in the blockchain by the links from your order.
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
    <Accordion.Header>    <span>2</span>
                <p>Why can I trust you?</p></Accordion.Header>
    <Accordion.Body>
    No registration and no need to share your personal details. We don't hold your funds, all exchanges take place instantly in fully automatic mode.
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
    <Accordion.Header>   
    <span>3</span>
                <p>Do you have hidden fees?</p>
    </Accordion.Header>
    <Accordion.Body>
    <p>Honesty is our main priority, so we commit to full transparency and make all the fees clear:</p>
             <p class="mb-2">•  1% if you opt for a <strong>fixed rate</strong></p>
             <p>•  0.5% if you opt for a <strong>floating rate</strong></p>
    </Accordion.Body>
    </Accordion.Item>
    </Accordion>
    
    </section>
    {/* <!-- index-faq --> */}

    </main>
        </div> 
 
  )
}
