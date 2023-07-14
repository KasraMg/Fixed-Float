import React,{ useEffect,useState } from 'react'
import './Blog.css'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import {  Link, useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import Loader from '../../Components/Loader/Loader'
import DOMPurify from 'dompurify'
import  IndexSwiper2 from '../../Components/IndexSwiper/IndexSwiper2' 
export default function Blog() {
    const param=useParams()
    const navigate=useNavigate()
    const [blogData,setBlogData]=useState()
    const [loaderStatus,setloaderStatus]=useState() 
    const myHtmlContent = blogData &&`${blogData.text}`;
    useEffect(() => {
        setloaderStatus(true)
       fetch(`  https://testsitexchange.com/api/blog.php?id_blog=${param.id}`)
       .then(res=>res.json())
       .then(data=>{ 
       
           setloaderStatus(false)
        if (data.code==200) {
            setBlogData(data) 
          console.log(data.text);
        }else{
            swal({
                title:'Blog not found',
                icon:'error',
                buttons:'ok'
            }).then(res=>navigate('/blogs'))
        }
         
    }) 
    }, [])
    
  return (
    <div className='Blog'>
        {blogData &&(
            <>
             <Header/>
        <img className='Blog-bg' src={blogData.image} alt="" />

        <section className='blog-intro'>
            <p className="blog-title">{blogData.title}</p>
            <span>{blogData.time.slice(0,11)}</span>
        </section>

        <main>
    
        <div dangerouslySetInnerHTML={{ __html: myHtmlContent }} />
            <div className='IndexSwiper'>
                    <p className="IndexSwiper-title">Recent posts</p>
                    <IndexSwiper2 />
                   <Link style={{textDecoration:'none'}} to={`/blogs`}> <button className='index-swiper-btn'>All Blogs</button></Link>
                </div>
        </main>
        <Footer/>
            </>
            
        )}
       {loaderStatus &&(
        <Loader/>
       )}
    </div>
  )
}
