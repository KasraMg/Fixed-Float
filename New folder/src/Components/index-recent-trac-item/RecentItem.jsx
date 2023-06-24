import React from 'react'
import './RecentItem.css'
export default function recentItem() {
    return (
        <li>
            <div className='recentItem-time'>
                <p>a few seconds ago</p>
                <p class="Recent-transactions-time Recent-transactions-time-2"><i
                class="ico-timer"></i>23 sec</p>
            </div>
            <hr />
            <main>
                <p style={{ justifyContent: "right" }}>300 USDT</p>
                <img src="../../images/index/icons8-bitcoin-25.png" alt="" />
                <div></div>
                <img src="../../images/index/icons8-tether-25.png" alt="" />
                <p> ETH</p>
            </main>
            <p class="Recent-transactions-time Recent-transactions-time-1"><i
                class="ico-timer"></i>23 sec</p>
        </li>
    )
}
