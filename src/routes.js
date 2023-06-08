import Index from "./Pages/Index/Index";
import Order from "./Pages/Order/Order";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Support from './Pages/Support/Support'
import Blogs from './Pages/Blogs/Blogs'
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import FAQ from "./Pages/FAQ/FAQ";
 const routes=[


   {path:'/' , element:<Index/>},
   {path:'/Order/:id' , element:<Order/>},
   {path:'/About' , element:<AboutUs/>},
   {path:'/Support' , element:<Support/>},
   {path:'/Blogs' , element:<Blogs/>},
   {path:'/Login' , element:<Login/>},
   {path:'/SignUp' , element:<SignUp/>},
   {path:'/FAQ' , element:<FAQ/>},
 
 

]
export default routes