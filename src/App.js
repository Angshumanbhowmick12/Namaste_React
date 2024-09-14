import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import About from "./components/About.jsx"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"
import Contact from "./components/Contact.jsx"
import ResturantMenu from "./components/ResturantMenu.jsx"
import UserContext from "./utils/UserContext.js"
import { Provider } from "react-redux"
import appStore from './utils/appStore.js'
import Cart from "./components/Cart.jsx"

//import Grocery from "./components/Grocery.jsx"

const Grocery= lazy(()=>import("./components/Grocery.jsx"))
const AppLayout=()=>{
    const [username,setUsername]=useState();
        // authentication 
    useEffect(()=>{
     // Make an Api call and send username and password

     const data ={
        name:"Angshuman",
     };

     setUsername(data.name)
    },[])
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedIn: username,setUsername}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}



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
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ],
        errorElement: <Error/>
    },
    

])



 const root= ReactDOM.createRoot(document.getElementById("root"))

 root.render(<RouterProvider router={appRouter}/>)

// React.createElement => object => HTMLElement(render)
