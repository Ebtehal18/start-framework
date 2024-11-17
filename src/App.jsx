import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Notfound from './Components/Notfound/Notfound'
import 'flowbite';



let routes=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'porfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<Notfound/>},
  ]}
])


function App() {

  return (
    <>
 <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
