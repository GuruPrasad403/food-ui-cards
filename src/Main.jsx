import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";    
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ErrorPage from "./Components/ErrorPage";
import RestroCard from "./Components/RestroCard";
import RestroMainPage from "./Components/RestroMainPage";
import ShimmerUI from "./Components/ShimmerUI";
// import Grocery from "./Components/Grocery";
const Grocery = lazy(() => import('./Components/Grocery'));

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<ErrorPage />,
        children :[
            {
                path:'/',
                element :<RestroCard />
            },
            
    {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<Contact />
    }
    ,
    {
        path:"/restaurants/:resId",
        element:<RestroMainPage />
    },
    {
        path: "/grocery",
        element: <Suspense fallback={<ShimmerUI />}> <Grocery /> </Suspense>
    }
        ]
    }
])
root.render(
    <RouterProvider router={appRouter} />
);
