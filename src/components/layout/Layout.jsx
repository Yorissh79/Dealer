import React from 'react'
import style from './Layout.module.scss'
import Header from '../header/Header'
import { Outlet } from 'react-router'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <div className={style.main}>
      <Header/> 
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout