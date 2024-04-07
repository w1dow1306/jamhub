import React from 'react'
import Navbar from './navbar'
import '../static/css/main.css'
import Info from './info'
import {
  Outlet,
} from "react-router-dom";
const Main = () => {
    return (
      <>
        <div className="main" id='main'>
          <Navbar />
          <Info />
          <div className="page">
            <Outlet/>
          </div>
      </div>
      </>
    )
}

export default Main