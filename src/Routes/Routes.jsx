import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Checkout from "../pages/Checkout/Checkout";
import Error from "../pages/Error/Error";
import Checkouts from "../pages/Checkouts/Checkouts";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/Home/About";
import Services from "../pages/Home/Services/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: '/about',
            element: <About></About>
        }, 
        {
            path: '/services',
            element: <Services></Services>
        }, 
        {
            path: '/signin',
            element: <SignIn></SignIn>
        }, 
        {
            path: '/signup',
            element: <SignUp></SignUp>
        }, 
        {
            path: '/service-details/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params}) => fetch(`https://car-doctor-server-nine-flame.vercel.app/services/${params.id}`)
        }, 
        {
            path: '/checkout/:id',
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader: ({params}) => fetch(`https://car-doctor-server-nine-flame.vercel.app/services/${params.id}`)
        }, 
        {
            path: '/checkouts',
            element: <Checkouts></Checkouts>
        }, 
      ]
    },
  ]);


  export default router;