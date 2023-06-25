import React,{ useState,useEffect } from 'react'
import './Blogs.css'
import Header from '../../Components/Header/Header'
import { HiArrowNarrowLeft,HiArrowNarrowRight } from 'react-icons/hi'
import Footer from '../../Components/Footer/Footer' 
import { Link } from 'react-router-dom'
export default function Blogs() {
const [activeCat,setActiveCat]=useState('')
const [details,setDeatils]=useState()
const [loaderStatus,setLoader]=useState(false)
const [pageCount,setPageCount]=useState(0)
const [blogsCount,setBlogsCount]=useState()
let BlogsCount;
    useEffect(() => { 
      fetch(`https://traderplus.info/exchange/api/blogs.php?typeing=${activeCat}&pageopen=1`)
      .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setDeatils(data);
            setLoader(false)
            setBlogsCount(Math.ceil(data.blogcount / 10))
            console.log(BlogsCount);
        })
    }, [activeCat])
    
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
                         <div className='blog-active-pagination'>1</div>
                         <div>2</div>
                     </section>
                     <div>
                         <button>
                             <HiArrowNarrowLeft/>
                         </button>
                         <button>
                             <HiArrowNarrowRight/>
                         </button>
                     </div>
                 </div>

               
             <Footer />
                         
         </div>
        )}
        </>
     
    )
}
