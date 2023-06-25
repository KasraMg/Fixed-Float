import React,{ useState,useEffect } from 'react'
import './Blogs.css'
import Header from '../../Components/Header/Header'
import { HiArrowNarrowLeft,HiArrowNarrowRight } from 'react-icons/hi'
import Footer from '../../Components/Footer/Footer' 
import { Link } from 'react-router-dom'
export default function Blogs() {
const [activeCat,setActiveCat]=useState('')
const [details,setDeatils]=useState() 
const [pageCount,setPageCount]=useState(1)
const [blogsCount,setBlogsCount]=useState()

    useEffect(() => { 
      fetch(`https://traderplus.info/exchange/api/blogs.php?typeing=${activeCat}&pageopen=${pageCount}`)
      .then(res=>res.json())
        .then(data=>{ 
            setDeatils(data); 
            setBlogsCount(Math.ceil(data.blogcount / 10))
             
        })
    }, [activeCat,pageCount])
    
    const plusPageCount=()=>{
        if (pageCount < blogsCount) {
            setPageCount(prev=>prev+1)
        }
    }
    const minusPageCount=()=>{
        if (pageCount > 1) {
            setPageCount(prev=>prev-1)
        }
    }
    return (
        <>
        {details &&(
             <div className='Blogs'>
             <Header />
 
             
 
             <div>
             <div className="Blogs-title"> Blog </div>
                 <nav>
                     <ul>
                     <li onClick={()=>setActiveCat('')} className={activeCat == '' &&'activeBlogs'}>Recent</li>  
                         {details.cating.map(cat=>(
                           <li onClick={()=>setActiveCat(cat.type)} className={activeCat == cat.name&&'activeBlogs'}>{cat.name}</li>  
                         ))}
                          
                     </ul>
                     
                     
                     
                     
                     
                 </nav>
 
                 <main>
                    {details.blogs.map(blog=>(
                         <section className='blog-section'>
                          
                        <Link style={{width:'100%'}} to={`${blog.id_blog}`}>
                        <img src={blog.image} alt="" />
                        </Link> 
                         
 
                         <div> 
                         <Link to={`blog/${blog.id_blog}`}>     <p>{blog.title}</p></Link> 
                             <span>{blog.description}</span>
                             <span className="mt-4">{blog.time.slice(0,11)}</span>
                         </div>

                         </section>

                    ))}

                   
                 
                   
                 </main>
             </div>
         
 
                 <div className="Blogs-pagination">
                     <section>
                        {Array(blogsCount)
                        .fill().map((data,index)=>(
                            <div onClick={()=>setPageCount(index+1)} className={index + 1 == pageCount && 'blog-active-pagination'}>{index + 1}</div>
                        ))}
                        
                          
                     </section>
                     <div>
                         <button>
                             <HiArrowNarrowLeft onClick={minusPageCount}/>
                         </button>
                         <button>
                             <HiArrowNarrowRight onClick={plusPageCount} />
                         </button>
                     </div>
                 </div>

               
             <Footer />
                         
         </div>
        )}
        </>
     
    )
}
