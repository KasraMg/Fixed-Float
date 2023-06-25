import React, { useEffect, useState } from "react";
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
        fetch(`https://traderplus.info/exchange/api/blogs.php?typeing=&pageopen=1`)
        .then(res=>res.json())
          .then(data=>{ 
            console.log(data)
              setDeatils(data.blogs); 
               
               
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
                className="mySwiper swiper-index-2"
            >
                {details && details.map(data=>(
                       <SwiperSlide>
                    <section>
                       <Link style={{width:'100%'}} to={`/blogs/${data.id_blog}`}>
                       <img style={{height:'234px'}} src={data.image} alt="" />
                       </Link>  

                        <div> 
                        <Link to={`/blogs/${data.id_blog}`}> <p>{data.title}</p></Link>    
                            <span>{data.description}</span>
                            <span  className="mt-4 swiper-time">{data.time.slice(0,11)}</span>
                        </div>
                    </section>
                </SwiperSlide>
                ))}
             
                
            </Swiper>
        </>

    );
}
