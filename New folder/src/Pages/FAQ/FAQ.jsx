import React, { useState } from 'react'
import './FAQ.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Accordion } from 'react-bootstrap'
export default function FAQ() {
    const [accordianStatus, setAccordianStatus] = useState('fixedFloat')
    return (
        <div className='FAQ'>
            <Header />

            <p className="FAQ-title">FAQ</p>

            <nav>
                <p className={accordianStatus == 'fixedFloat' ? 'navActive' : null} onClick={() => setAccordianStatus('fixedFloat')}>About FixedFloat</p>
                <p className={accordianStatus == 'exchange' ? 'navActive' : null} onClick={() => setAccordianStatus('exchange')}>About exchange</p>
                <p className={accordianStatus == 'orders' ? 'navActive' : null} onClick={() => setAccordianStatus('orders')}>About orders</p>
            </nav>



            <section class="index-faq">
                <Accordion defaultActiveKey="0">

                    {accordianStatus == 'fixedFloat' && (
                        <>

                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span>1</span>
                                    <p>What is FixedFloat?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    FixedFloat is a fully automated service for exchanging cryptocurrencies and tokens on favorable terms. FixedFloat is not custodial. The exchange takes place immediately after receiving the coins and the required number of network confirmations.
                                    <br />
                                    FixedFloat was launched in 2018 by a team of blockchain specialists with extensive experience in developing rich web applications. In an effort to provide a convenient platform for cryptocurrency exchanges, FixedFloat is constantly actively developing and improving for its customers.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header><span>2</span>
                                    <p> Why FixedFloat is the smartest way to exchange cryptocurrency?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Our top priority is to provide a high quality cryptocurrency exchange service through our unique solutions that do not compromise speed and security.
                                    <div className='faq-exchange-cryptocurrency'>
                                        <section>
                                            <p>1. Save your money.</p>
                                            <span>Make an exchange at the most favorable rate and with transparent commission. We always have the better offer.</span>
                                        </section>
                                        <section>
                                            <p>2. Save your time.</p>
                                            <span>Use our fully automated processing and get an answer to any of your questions instantly with our supreme support. </span>
                                        </section>
                                        <section>
                                            <p>3. Hassle-free exchange.</p>
                                            <span>No registration and unnecessary details. It is simple as 1-2-3. </span>
                                        </section>
                                        <section>
                                            <p>4. Cross-platform.</p>
                                            <span>FixedFloat is designed with performance in mind and works perfectly on any device. </span>
                                        </section>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header><span>3</span>
                                    <p>Why should I trust FixedFloat?</p>
                                </Accordion.Header>
                                <Accordion.Body className=' faq-trust-FixedFloat'>
                                    For 4 years, FixedFloat has gained the trust of more than a million users from all over the world. We respect the anonymity and security of our customers — no data is required to make exchanges. FixedFloat works completely automatically and support is available on Live Chat 24/7.
                                    <br />
                                    <br />
                                    The loyalty of our customers is fully reflected on popular sites in <a href="https://www.trustpilot.com/review/fixedfloat.com">Trustpilot</a> and <a href="https://www.bestchange.com/fixedfloat-exchanger.html">BestChange</a> reviews.
                                    <ul>
                                        <section>
                                            <p>FixedFloat on social networks:</p>
                                            <li><a href="">Facebook</a></li>
                                            <li><a href="">Twitter</a></li>
                                            <li><a href="">Instagram</a></li>
                                        </section>
                                        <section>
                                            <p>FixedFloat on forums:</p>
                                            <li><a href="">Reddit</a></li>
                                            <li><a href="">Bitcointalk</a></li>
                                            <li><a href="">Medium</a></li>
                                            <li><a href="">Steemit</a></li>
                                        </section>
                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>

                            {/* <Accordion.Item eventKey="0">
                                <Accordion.Header><span>4</span>
                                    <p> </p>
                                </Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item> */}

                        </>
                    )}


                    {accordianStatus == 'exchange' && (
                        <>

                            <Accordion.Item eventKey="0">
                                <Accordion.Header>   <span>1</span>
                                    <p>What is the difference between a fixed and a float rates?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <p className='faq-acordian-title'>Fixed rate</p>
                                        <p>Opting for a fixed rate, you get the price you see at the point of initiating a transaction.</p>
                                        <ul>
                                            <li>Pay just 1% + network fee.</li>
                                            <li>Rates freeze for 10 minutes.</li>
                                            <li>If the market rate changes by more than 1.2% before the appearance of your transaction on the blockchain network, you will be asked to make a refund or continue exchanging at the market rate.</li>
                                        </ul>
                                        <p>Attention! Your transaction must be received within 10 minutes and the amount must exactly match the amount of the order.</p>

                                        <p>Otherwise, you will be prompted to make a refund or continue the exchange at the market rate.</p>
                                    </div>

                                    <div className='mt-5'>
                                        <p className='faq-acordian-title'>Fixed rate</p>
                                        <p>The exchange rate is finally set when your transaction receives the necessary number of blockchain network confirmations. If the market goes up, you will get more cryptocurrency, if down - less. All fair.</p>
                                        <ul>
                                            <li>Pay just 0.5% + network fee.</li>
                                            <li>The exchange rate will be set when we receive your transaction.</li>

                                        </ul>
                                        <p>Example: you are exchanging 1 BTC for 28.37362388 ETH. With a fixed rate, you will receive exactly 28.37362388 ETH. With a <br />float exchange rate, the amount of ETH can change both up and down. It depends on changes in the market rate. </p>

                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>



                            <Accordion.Item eventKey="1">
                                <Accordion.Header><span>2</span>
                                    <p>What are FixedFloat fees? </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    You can choose from two exchange <a href="">strategies</a>:
                                    <ul>
                                        <li><strong>Fixed rate</strong>: FixedFloat fee 1% + network fee. The exchange rate is fixed at the time of order creation.</li>
                                        <li><strong>Fixed rate</strong>: FixedFloat fee 0.5% + network fee. The exchange rate is set only after your transaction arrives and is confirmed by the network. The order amount may change from the moment the order was created due to changes in the market rate, both up and down.</li>
                                    </ul>
                                    <a href="">    The network fee</a> is a payment to miners for processing a transaction, its amount is individual for each blockchain.
                                </Accordion.Body>
                            </Accordion.Item>



                            <Accordion.Item eventKey="2">
                                <Accordion.Header><span>3</span>
                                    <p> How long does the exchange take?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    As soon as your transaction arrives at our address and receives the required number of network confirmations, the exchange is automatically performed and a transaction is sent to your address. The waiting time for transaction confirmation depends on several factors: the network fee you specified when sending it and the speed of the blockchain network.
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="3">
                                <Accordion.Header><span>4</span>
                                    <p> What happens if I set low transactions fees?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    If you send us a transaction with a low network fee, you risk spending a lot of time waiting for the order to be completed. The order will be executed automatically only after your transaction receives the required number of network confirmations. Due to the low fees, the transaction may have poor priority and not be confirmed by the network anytime soon.
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="4">
                                <Accordion.Header><span>5</span>
                                    <p> What can I do to speed up the transaction?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    The average amount of the network fee is individual for each blockchain, and depending on the current load, it may change. The more you set the <a href="">network fee</a>, the higher the priority of the transaction and the faster it will be processed. Usually, the optimal network fee is automatically calculated by your wallet.
                                    <br />
                                    If you have sent us a transaction on the Bitcoin or Ethereum network and are waiting for a network confirmation for a long time, you can increase the priority of your transaction on the network using the RBF feature.
                                </Accordion.Body>
                            </Accordion.Item>



                            <Accordion.Item eventKey="5">
                                <Accordion.Header><span>6</span>
                                    <p>Why is my wallet address recognized as invalid? </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Carefully check the network of the address you are trying to enter when creating the order, and the network of the currency you have selected in the "Receive" field. If your address is determined to be invalid, then your address network does not match the network of the selected currency.
                                </Accordion.Body>
                            </Accordion.Item>




                            <Accordion.Item eventKey="7">
                                <Accordion.Header><span>7</span>
                                    <p>Why does sending a transaction take so long? </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    The speed of transaction processing depends on the bandwidth of the blockchain and the set fee of the network when it is sent. We automatically send transactions with the current network fee. Sometimes in the blockchain network there are increased loads beyond our control and untimely release of new blocks.
                                </Accordion.Body>
                            </Accordion.Item>

                        </>
                    )}


                    {accordianStatus == 'orders' && (
                        <>

                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span>1</span>
                                    <p>How can I track my order?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    In three ways: by email (if you leave your email address), on our website (if your browser accepts cookies) or by viewing the transactions in the blockchain by the links from your order.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header><span>2</span>
                                    <p>What should I do if my order expired? </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    If your transaction has not arrived before the order time has passed, on the order page you will be able to choose:

                                    Continue the exchange at a floating rate. The order will be executed after the transaction is received and the required number of network confirmations is received.
                                    <br />
                                    Make a refund of the amount sent for the exchange minus the network fee. To do this, you need to specify your address, to which the coins will be returned after receiving your transaction.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header><span>3</span>
                                    <p>I accidentally closed the FixedFloat site, what should I do? </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    If you have entered a valid email address in your order, you will receive an email with a link to your order.
                                    You can return to the page through your browser history.
                                    You can ask for help in the Live Chat on the site.
                                </Accordion.Body>
                            </Accordion.Item>



                        </>
                    )}



                </Accordion>

            </section>



            <Footer />
        </div>
    )
}
