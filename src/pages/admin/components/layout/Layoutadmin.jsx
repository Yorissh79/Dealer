import React from 'react'
import style from './Layoutadmin.module.scss'
import Header from '../header/Header'
import { Outlet } from 'react-router'

const Layoutadmin = () => {
  return (
    <div className={style.main}>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layoutadmin