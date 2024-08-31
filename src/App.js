import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import About from "./components/About.jsx"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"
import Contact from "./components/Contact.jsx"
import ResturantMenu from "./components/ResturantMenu.jsx"
//import Grocery from "./components/Grocery.jsx"
const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const Grocery= lazy(()=>import("./components/Grocery.jsx"))

const appRouter=createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading.......</h1>}><Grocery/></Suspense>
            },
            {
                path:'/resturant/:restid',
                element: <ResturantMenu/>,
            }
        ],
        errorElement: <Error/>
    },
    

])



 const root= ReactDOM.createRoot(document.getElementById("root"))

 root.render(<RouterProvider router={appRouter}/>)

// React.createElement => object => HTMLElement(render)
