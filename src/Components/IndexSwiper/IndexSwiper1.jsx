import React, { useRef, useState,useEffect } from "react";
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
import { Link } from "react-router-dom";
export default function App() {
    const [details,setDeatils]=useState() 
    useEffect(() => {
        fetch(`https://pilbil.com/api/blogs.php?typeing=news&pageopen=1`)
        .then(res=>res.json())
          .then(data=>{   
              setDeatils(data.blogs); 
                console.log(data);
          })
    }, [])
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
                {details && details.map(data=>(
                     <SwiperSlide style={{ background:` url(${data.image})`}}>
                     <p>{data.title}</p>
                     <span className="index-swiper-1-span">{data.description.length > 79 ? data.description.slice(0,79) +'...' : data.description}</span>
                     <button>      <Link to={`/blogs/${data.id_blog}`}>Read</Link></button> 
                </SwiperSlide>
                ))}
               
           
            </Swiper>
        </>

    );
}
