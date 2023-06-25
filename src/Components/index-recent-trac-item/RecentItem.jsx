import React from 'react'
import './RecentItem.css'
export default function recentItem(props) {
     
    return (
        <li>
            <div className='recentItem-time'>
                <p>{props.time.slice(0,11)}</p>
                <p class="Recent-transactions-time Recent-transactions-time-2"><i
                class="ico-timer"></i>23 sec</p>
            </div>
            <hr />
            <main>
                <p className={props.amount_send.length < 6 ?'amount_send smallAnmount' :'amount_send' } style={{ justifyContent: "right" }}>{props.amount_send} {props.symbol1}</p>
                <img src={props.image1} alt="" />
                <div></div>
                <img src={props.image2} alt="" />
                <p> {props.symbol2}</p>
            </main>
            <p class="Recent-transactions-time Recent-transactions-time-1"><i
                class="ico-timer"></i>23 min</p>
        </li>
    )
}
