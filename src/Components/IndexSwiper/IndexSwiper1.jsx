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
                        slidesPerView: 1,
                        spaceBetween: 35,
                    },
                    800: {
                        slidesPerView: 2,
                        spaceBetween: 45,
                    },

                    1364: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                }}
                modules={[Scrollbar, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                     <p>News of cryptocurrencies of the 2nd week of May 2023</p>
                     <span className="index-swiper-1-span">The BTC network fee rose above $30, Terraform Labs co-founders Do Kwon was released from prison on bail, technical failures occurred twice in the Ethereum network.</span>
                        <button>Read</button>
                </SwiperSlide>
                <SwiperSlide style={{ background:' url(https://fixedfloat.com/media/thumbs/blog/news/FF-New_News_05-23_01_w768.jpg)'}}>
                   <p>News of cryptocurrencies of the 2nd week of May 2023</p>
                     <span className="index-swiper-1-span">The BTC network fee rose above $30, Terraform Labs co-founders Do Kwon was released from prison on bail, technical failures occurred twice in the Ethereum network.</span>
                        <button>Read</button>
                    </SwiperSlide>
                <SwiperSlide>
                   <p>News of cryptocurrencies of the 2nd week of May 2023</p>
                     <span className="index-swiper-1-span">The BTC network fee rose above $30, Terraform Labs co-founders Do Kwon was released from prison on bail, technical failures occurred twice in the Ethereum network.</span>
                        <button>Read</button>
                    </SwiperSlide>
                <SwiperSlide style={{ background:' url(https://fixedfloat.com/media/thumbs/blog/news/FF-New_News_05-23_01_w768.jpg)'}}>
                   <p>News of cryptocurrencies of the 2nd week of May 2023</p>
                     <span className="index-swiper-1-span">The BTC network fee rose above $30, Terraform Labs co-founders Do Kwon was released from prison on bail, technical failures occurred twice in the Ethereum network.</span>
                        <button>Read</button>
                    </SwiperSlide>
                <SwiperSlide>
                   <p>News of cryptocurrencies of the 2nd week of May 2023</p>
                     <span className="index-swiper-1-span">The BTC network fee rose above $30, Terraform Labs co-founders Do Kwon was released from prison on bail, technical failures occurred twice in the Ethereum network.</span>
                        <button>Read</button>
                    </SwiperSlide>
                <SwiperSlide style={{ background:' url(https://fixedfloat.com/media/thumbs/blog/news/FF-New_News_05-23_01_w768.jpg)'}}>
                   <p>News of cryptocurrencies of the 2nd week of May 2023</p>
                     <span className="index-swiper-1-span">The BTC network fee rose above $30, Terraform Labs co-founders Do Kwon was released from prison on bail, technical failures occurred twice in the Ethereum network.</span>
                        <button>Read</button>
                    </SwiperSlide>
                <SwiperSlide>
                   <p>News of cryptocurrencies of the 2nd week of May 2023</p>
                     <span className="index-swiper-1-span">The BTC network fee rose above $30, Terraform Labs co-founders Do Kwon was released from prison on bail, technical failures occurred twice in the Ethereum network.</span>
                        <button>Read</button>
                    </SwiperSlide>
                <SwiperSlide>
                   <p>News of cryptocurrencies of the 2nd week of May 2023</p>
                     <span className="index-swiper-1-span">The BTC network fee rose above $30, Terraform Labs co-founders Do Kwon was released from prison on bail, technical failures occurred twice in the Ethereum network.</span>
                        <button>Read</button>
                    </SwiperSlide>
                <SwiperSlide>
                   <p>News of cryptocurrencies of the 2nd week of May 2023</p>
                     <span className="index-swiper-1-span">The BTC network fee rose above $30, Terraform Labs co-founders Do Kwon was released from prison on bail, technical failures occurred twice in the Ethereum network.</span>
                        <button>Read</button>
                    </SwiperSlide>
            </Swiper>
        </>

    );
}
