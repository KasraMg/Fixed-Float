import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './IndexSwiper.css'
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/scrollbar";
import { Navigation } from "swiper";
// import required modules
import { Scrollbar } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                scrollbar={{
                    hide: false,
                }}
                navigation={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 35,
                    },
                    800: {
                        slidesPerView:2,
                        spaceBetween: 45,
                    },

                    1364: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                }}
                modules={[Scrollbar, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <section>
                        <img src="https://fixedfloat.com/media/thumbs/blog/v2/crypto_wallets_w768.jpg" alt="" />

                        <div> 
                            <p>Types of cryptocurrency wallets</p>
                            <span>FixedFloat is a non-custodial exchange, our users take care of storing their coins on their own. We figured out the types of wallets and gave some tips on choosing the right one.</span>
                            <span className="mt-4">December 1, 2022</span>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section>
                        <img src="https://fixedfloat.com/media/thumbs/blog/v2/crypto_wallets_w768.jpg" alt="" />

                        <div> 
                              <p>Types of cryptocurrency wallets</p>
                            <span>FixedFloat is a non-custodial exchange, our users take care of storing their coins on their own. We figured out the types of wallets and gave some tips on choosing the right one.</span>
                            <span className="mt-4">December 1, 2022</span>
                        </div>
                    </section></SwiperSlide>
                <SwiperSlide>
                    <section>
                        <img src="https://fixedfloat.com/media/thumbs/blog/v2/crypto_wallets_w768.jpg" alt="" />

                        <div>
                              <p>Types of cryptocurrency wallets</p>
                            <span>FixedFloat is a non-custodial exchange, our users take care of storing their coins on their own. We figured out the types of wallets and gave some tips on choosing the right one.</span>
                            <span className="mt-4">December 1, 2022</span>
                        </div>
                    </section></SwiperSlide>
                <SwiperSlide>
                    <section>
                        <img src="https://fixedfloat.com/media/thumbs/blog/v2/crypto_wallets_w768.jpg" alt="" />

                        <div> 
                            <p>Types of cryptocurrency wallets</p>
                            <span>FixedFloat is a non-custodial exchange, our users take care of storing their coins on their own. We figured out the types of wallets and gave some tips on choosing the right one.</span>
                            <span className="mt-4">December 1, 2022</span>
                        </div>
                    </section></SwiperSlide>
                <SwiperSlide>
                    <section>
                        <img src="https://fixedfloat.com/media/thumbs/blog/v2/crypto_wallets_w768.jpg" alt="" />

                        <div>   
                            <p>Types of cryptocurrency wallets</p>
                            <span>FixedFloat is a non-custodial exchange, our users take care of storing their coins on their own. We figured out the types of wallets and gave some tips on choosing the right one.</span>
                            <span className="mt-4">December 1, 2022</span>
                        </div>
                    </section></SwiperSlide>
                <SwiperSlide>
                    <section>
                        <img src="https://fixedfloat.com/media/thumbs/blog/v2/crypto_wallets_w768.jpg" alt="" />

                        <div> 
                            <p>Types of cryptocurrency wallets</p>
                            <span>FixedFloat is a non-custodial exchange, our users take care of storing their coins on their own. We figured out the types of wallets and gave some tips on choosing the right one.</span>
                            <span className="mt-4">December 1, 2022</span>
                        </div>
                    </section></SwiperSlide>
                <SwiperSlide>
                    <section>
                        <img src="https://fixedfloat.com/media/thumbs/blog/v2/crypto_wallets_w768.jpg" alt="" />

                        <div> 
                            <p>Types of cryptocurrency wallets</p>
                            <span>FixedFloat is a non-custodial exchange, our users take care of storing their coins on their own. We figured out the types of wallets and gave some tips on choosing the right one.</span>
                            <span className="mt-4">December 1, 2022</span>
                        </div>
                    </section></SwiperSlide>
                <SwiperSlide>
                    <section>
                        <img src="https://fixedfloat.com/media/thumbs/blog/v2/crypto_wallets_w768.jpg" alt="" />

                        <div> 
                            <p>Types of cryptocurrency wallets</p>
                            <span>FixedFloat is a non-custodial exchange, our users take care of storing their coins on their own. We figured out the types of wallets and gave some tips on choosing the right one.</span>
                            <span className="mt-4">December 1, 2022</span>
                        </div>
                    </section></SwiperSlide>
                <SwiperSlide>
                    <section>
                        <img src="https://fixedfloat.com/media/thumbs/blog/v2/crypto_wallets_w768.jpg" alt="" />

                        <div> 
                            <p>Types of cryptocurrency wallets</p>
                            <span>FixedFloat is a non-custodial exchange, our users take care of storing their coins on their own. We figured out the types of wallets and gave some tips on choosing the right one.</span>
                            <span className="mt-4">December 1, 2022</span>
                        </div>
                    </section></SwiperSlide>
            </Swiper>
        </>

    );
}
