import React, { useState, useEffect } from 'react'
import RecentItem from '../../Components/index-recent-trac-item/RecentItem'
import './Index.css'
import Accordion from 'react-bootstrap/Accordion';
import IndexSwiper2 from '../../Components/IndexSwiper/IndexSwiper2'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import IndexSwiper1 from '../../Components/IndexSwiper/IndexSwiper1'
import ExchangeAmounts from '../../Components/ExchangeAmounts/ExchangeAmounts';
import ExchangeDestination from '../../Components/ExchangeDestination/ExchangeDestination';
import { Link } from 'react-router-dom';
export default function Index() {
    const [lastOrder, setLastOrder] = useState()
    useEffect(() => {
        fetch('  https://testsitexchange.com/api/main_10list.php')
            .then(res => res.json())
            .then(data => {
                setLastOrder(data.orders_open) 
            })
    }, [])



    return (
        <div className='index'>
            <Header />
            <img className="exchange-form-outer-background"
                src="https://fixedfloat.com/assets/images/background/main_bg.svg"
                alt="" />
            {/* <!-- exchange-form --> */}
            <div className="exchange-form-outer-container exchange-form-outer">

                <p className="exchange-form-outer-title">
                    Lightning cryptocurrency exchange

                </p>


                <ExchangeAmounts />

                <ExchangeDestination />


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
                        {lastOrder && lastOrder.map(data => (
                            <RecentItem {...data}/>
                        ))}

                        
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

                <div className='IndexSwiper IndexSwiper1'>
                    <p className="IndexSwiper-title">News</p>
                    <IndexSwiper1 /> 
                    <Link style={{textDecoration:'none'}} to={`/blogs`}> <button className='index-swiper-btn'>Read All</button></Link>
                </div>
                <div className='IndexSwiper'>
                    <p className="IndexSwiper-title">Guides and tutorials</p>
                    <IndexSwiper2 /> 
                    <Link style={{textDecoration:'none'}} to={`/blogs`}> <button className='index-swiper-btn'>Read All</button></Link>
                </div>

            </main>
            <Footer />
        </div>

    )
}
