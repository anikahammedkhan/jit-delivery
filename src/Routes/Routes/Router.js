import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import OurServices from "../../Pages/OurServices/OurServices";
import About from "../../Pages/About/About";
import Contact from "../../Pages/ContactUs/Contact";
import Tracking from "../../Pages/Tracking/Tracking";
import GetAQuote from "../../Pages/GetAQuote/GetAQuote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-services",
        element: <OurServices />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/tracking",
        element: <Tracking />,
      },
      {
        path: "/get-a-quote",
        element: <GetAQuote />,
      },
    ],
  },
  //   {
  //     path: "/dashboard",
  //     element: <DashboardLayout></DashboardLayout>,
  //     children: [
  //       {
  //         path: "/dashboard",
  //         element: (
  //           <PrivateRoute>
  //             <Dashboard></Dashboard>
  //           </PrivateRoute>
  //         ),
  //       },
  //       {
  //         path: "/dashboard/my-products",
  //         element: (
  //           <SellerRoute>
  //             <MyProducts></MyProducts>
  //           </SellerRoute>
  //         ),
  //       },
  //       {
  //         path: "/dashboard/add-product",
  //         element: (
  //           <SellerRoute>
  //             <AddProduct></AddProduct>
  //           </SellerRoute>
  //         ),
  //       },
  //       {
  //         path: "/dashboard/my-buyers",
  //         element: (
  //           <SellerRoute>
  //             <MyBuyers></MyBuyers>
  //           </SellerRoute>
  //         ),
  //       },
  //       {
  //         path: "/dashboard/my-orders",
  //         element: (
  //           <BuyerRoute>
  //             <MyOrders></MyOrders>
  //           </BuyerRoute>
  //         ),
  //       },
  //       {
  //         path: "/dashboard/payment/:id",
  //         element: (
  //           <BuyerRoute>
  //             <Payment></Payment>
  //           </BuyerRoute>
  //         ),
  //         loader: ({ params }) =>
  //           fetch(`https://reseliya-server.vercel.app/order/${params.id}`),
  //       },
  //       {
  //         path: "/dashboard/all-sellers",
  //         element: (
  //           <AdminRoutes>
  //             <AllSellers></AllSellers>
  //           </AdminRoutes>
  //         ),
  //       },
  //       {
  //         path: "/dashboard/all-buyers",
  //         element: (
  //           <AdminRoutes>
  //             <Allbuyers></Allbuyers>
  //           </AdminRoutes>
  //         ),
  //       },
  //       {
  //         path: "/dashboard/reported-items",
  //         element: (
  //           <AdminRoutes>
  //             <ReportedItems></ReportedItems>
  //           </AdminRoutes>
  //         ),
  //       },
  //     ],
  //   },
]);

export default router;
