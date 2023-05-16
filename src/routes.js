import Index from "./Pages/Index/Index";
import Order from "./Pages/Order/Order";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Support from './Pages/Support/Support'

 const routes=[


   {path:'/' , element:<Index/>},
   {path:'/Order' , element:<Order/>},
   {path:'/About' , element:<AboutUs/>},
   {path:'/Support' , element:<Support/>},
 
 

]
export default routes