import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './page/home/Home';
import About from './page/about/About';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} >
      <Route index element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
    </Route>
  )
);


const App = () => {
  return <RouterProvider router={router}/>
}

export default App