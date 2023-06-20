import Index from "./Pages/Index/Index";
import Order from "./Pages/Order/Order";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Support from './Pages/Support/Support'
import Blogs from './Pages/Blogs/Blogs'
import Login_Register from "./Pages/Login_Register/Login_Register"; 
import FAQ from "./Pages/FAQ/FAQ";
import UserDashboard from './Pages/userDashboard/UserDashboard'
import OrderHistory from "./Pages/userDashboard/OrderHistory/OrderHistory";
import UserProfile from "./Pages/userDashboard/UserProfile/UserProfile";
 const routes=[


   {path:'/' , element:<Index/>},
   {path:'/Order/:id' , element:<Order/>},
   {path:'/About' , element:<AboutUs/>},
   {path:'/Support' , element:<Support/>},
   {path:'/Blogs' , element:<Blogs/>},
   {path:'/Login' , element:<Login_Register/>}, 
   {path:'/Register' , element:<Login_Register/>}, 
   {path:'/ForgotPassword' , element:<Login_Register/>}, 
   {path:'/FAQ' , element:<FAQ/>},
 
   {
    path: "/user-Dashboard/*",
    element: <UserDashboard />,
    children: [
        { path: "OrderHistory", element: <OrderHistory /> },
        { path: "UserProfile", element: <UserProfile /> },
       
    ],
  },

]
export default routes