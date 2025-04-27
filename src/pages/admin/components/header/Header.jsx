import React from 'react'
import style from './Header.module.scss'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className={style.main}>
        <Link to={"/admin"}>Admin</Link>
        <Link to={"/admin/dashboard"}>Dashboard</Link>
    </div>
  )
}

export default Header