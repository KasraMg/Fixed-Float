import React from 'react'
import './Privacy.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
export default function Privacy() {
    return (
        <div className='Privacy'>
            <Header />
            <div className='Privacy-topBar'>
                <p className="Privacy-title">Privacy policy</p>
                <span>Last updated on January 14, 2023</span>
            </div>

            <main>

                <section className='Privacy-section'>
                    <p className="privacy-section-title">SECTION 1</p>
                    <span>Definitions</span>
                    <p>In this Privacy Policy (the "Privacy Policy"):</p>
                    <p><strong>"Cookies"</strong> means data files that are placed on your device or computer and often include an anonymous unique identifier. This data can be used for authentication, identification of a user session, user's preferences or anything else that can be achieved through storing data on your computer. For more information about cookies, and how to disable cookies, visit <a href=" http://www.allaboutcookies.org"> http://www.allaboutcookies.org</a>.</p>
                    <p><strong>"FixedFloat"</strong> means a set of related web pages and services located under a single domain named fixedfloat.com.</p>
                    <p><strong>"Google"</strong> means Google LLC.</p>
                    <p><strong>"Log Files"</strong> means track actions occurring on the FixedFloat and data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</p>
                    <p><strong>"Personal Data"</strong> means (a) data that can be used to identify or made identifiable an individual and (b) Cookies, Log Files, Tages and Pixels.</p>
                    <p><strong>"Tags"</strong> and "Pixels" means electronic files used to record information about how you browse the FixedFloat.</p>
                </section>

                <section className='Privacy-section'>
                    <p className="privacy-section-title">SECTION 2</p>
                    <span>General</span>
                    <p >This Privacy Policy relates to the Personal Data that we collect when you are using our services or visiting FixedFloat.</p>
                    <p>Personal Data is processed pursuant to the provisions of Regulation (EU) 2016/679 of the European Parliament and of the Council dated 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation) and the Personal Data Protection Act dated 10 May 2018.</p>
                    <p>We would like to assure you that we are committed to the following principles of Personal Data protection:</p>
                    <ul>
                        <li> <img src='/images/order/Capture.PNG' className='privacy-listStyle' />  any Personal Data you provide us with will be secured and will be collected only for the purposes set forth in this Privacy Policy;</li>
                        <li> <img src='/images/order/Capture.PNG' className='privacy-listStyle' /> we will not rent or sell your Personal Data to any third party;</li>
                        <li> <img src='/images/order/Capture.PNG' className='privacy-listStyle' /> we are committed to certain principles of Personal Data protection in relation to General Data Protection Regulation effective from 25 May 2018;</li>
                        <li> <img src='/images/order/Capture.PNG' className='privacy-listStyle' /> we will provide you with the means to contact us regarding any questions or requests relating to this Privacy Policy or Personal Data.</li>
                    </ul>
                    <p> By using our services or visiting FixedFloat you confirm your agreement with this Privacy Policy. In view of that if you do not agree with this Privacy Policy please kindly do not visit FixedFloat and do not use our services.</p>
                </section>

                <section className='Privacy-section'>
                    <p className="privacy-section-title">SECTION 3</p>
                    <span>Personal Data We Collect</span>
                    <p>If you use our services you may provide us with your e-mail address in order to receive relevant notifications.</p>
                    <p>When you visit FixedFloat we automatically collect certain information about your device (i.e. Cookies, Tags and Pixels and Log Files).</p>
                </section>

                <section className='Privacy-section'>
                    <p className="privacy-section-title">SECTION 4</p>
                    <span>Processing of Personal Data</span>
                    <p >The Personal Data is processed on the basis of (a) your consent or (b) provisions of law (including any relevant laws and regulations on counteracting money-laundering and terrorism financing) that authorise to process Personal Data.</p>
                    <p>The processing of your collected Personal Data is based on (a) your consent as you provide us with your e-mail address or (b) by visiting FixedFloat and using our services. You can withdraw your consent at any time by sending a relevant notification to our support service (see section Contacts details and rights below).</p>
                    <p>In order for us to provide our services, we will need to undertake collection, recording, organisation, storage, adaptation/alteration, retrieval, consultation, use, disclosure, erasure or destruction of your Personal Data, either among our affiliates or other authorised third parties. FixedFloat does not collect any sensitive Personal Data about you (i.e. gender, racial origin, financial position).</p>
                    <p>FixedFloat is concerned with protecting your privacy and has commercially reasonable technical and organizational measures to protect your Personal Data against unlawful or unauthorized access, use, abuse, loss and disclosure and store your Personal Data securely. We will also take all reasonable precautionary steps to ensure that our staff have received adequate training relating to Personal Data protection. Notwithstanding the fact that we use all reasonable efforts to protect your Personal Data, we cannot guarantee the absolute security of your Personal Data provided or collected through FixedFloat.</p>
                    <p>We may use your Personal Data for the following purposes:</p>
                    <ul>
                        <li> <img src='/images/order/Capture.PNG' className='privacy-listStyle' />  informing you of the status of the exchange;</li>
                        <li> <img src='/images/order/Capture.PNG' className='privacy-listStyle' />  providing you with supporting documents;</li>
                        <li> <img src='/images/order/Capture.PNG' className='privacy-listStyle' />marketing purposes;</li>
                        <li> <img src='/images/order/Capture.PNG' className='privacy-listStyle' /> improving FixedFloat and our services.</li>
                    </ul>
                    <p>We may retain Personal Data even after the exchange has been completed if retention is reasonably necessary to comply with our obligations under applicable laws, rules and regulations or to meet regulatory requirements, resolve disputes or enforce this Privacy Policy or our obligations. We will retain your Personal Data for a reasonable period or as long as required by applicable laws, rules and regulations.</p>
                    <p>We do not knowingly and/or intentionally request to collect or collect Personal Data from any under-age individual. If a user submitting Personal Data is suspected of being under-age, we will require to cancel the exchange and will not allow continuing using our services. We will also take steps to delete the Personal Data as soon as possible.</p>
                </section>

                <section className='Privacy-section'>
                    <p className="privacy-section-title">SECTION 5</p>
                    <span>Cookies</span>
                    <p>When you visit FixedFloat our system automatically collects information about your visit, such as your browser type, your IP address, and the referring website. Such information is typically collected using Cookies, Log Files, Tages and Pixels and similar tools.</p>
                    <p>We use <a href="https://analytics.google.com/analytics/web/"> Google Analytics</a>, a web analysis service of Google. Please review their Terms of Service and <Link to='/Privacy-Policy'>Privacy Policy</Link>.</p>
                    <p>FixedFloat uses the Remarketing Lists features of Google Analytics for Display Advertisers. FixedFloat and Google use first-party cookies (such as the Google Analytics cookie) and third-party cookies (such as the DoubleClick cookie) together to inform, optimize, and serve ads based on your past visits to FixedFloat.com. This means that vendors including Google will display FixedFloat.com promotional material on other sites you visit across the Internet.</p>
                    <p>We use cookies from third-party partners, such as Google and Facebook, for marketing purposes. FixedFloat.com uses Google Analytics to process data about your behavior, age, gender, interests, to show you targeted ads and other content that has been customized for you.</p>
                    <p>You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>.</p>
                    <p>We also use  <a href="https://adwords.google.com/">Google AdWords</a>  Conversion Tracking cookie to measure and optimize the performance and user experience related to our ads in Google Search or selected Google Display Network sites. Please review the privacy policy <a href="https://policies.google.com/privacy?hl=en">hear</a>.</p>
                </section>

                <section className='Privacy-section'>
                    <p className="privacy-section-title">SECTION 6</p>
                    <span>Reservation of Rights</span>
                    <p>We reserve the right to amend this Privacy Policy at any time without prior notice to you. We will process the Personal Data in accordance with the terms of the Privacy Policy that you have consented to at the time of your consent. Upon an update of this Privacy Policy, we will inform you with a banner notice on the FixedFloat. If you continue to use FixedFloat, it will constitute and will be considered as your consent to the updated Privacy Policy. Check the date at the beginning of this Privacy Policy to determine when it was last amended.</p>
                </section>

                <section className='Privacy-section'>
                    <p className="privacy-section-title">SECTION 7</p>
                    <span>Contact details and Rights</span>
                    <p>Upon receipt of your request and due review of its merits:</p>
                    <ul>
                        <li> <img src='/images/order/Capture.PNG' className='privacy-listStyle' />  we will provide you with information as to whether and what Personal Data we store in relation to you;</li>
                        <li> <img src='/images/order/Capture.PNG' className='privacy-listStyle' /> should your Personal Data be incorrect you may have it rectified; and</li>
                        <li> <img src='/images/order/Capture.PNG' className='privacy-listStyle' />you may also revoke your consent to use your Personal Data in the future, in whole or in parts, or request deletion of your Personal Data.</li>
                    </ul>
                    <p>If you have any questions or queries about us, our Privacy Policy or your Personal Data please contact us using our support service at <Link to='/Support'>Support page</Link> or at info@fixedfloat.com.</p>
                </section>
            </main>
            <Footer />
        </div>
    )
}
