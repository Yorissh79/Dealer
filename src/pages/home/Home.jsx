import React from 'react'
import style from './Home.module.scss'
import Fsection from './components/fsection/Fsection'
import Ssection from './components/ssection/Ssection'
import Tsection from './components/tsection/Tsection'
import Cards from './components/cards/Cards'
import Collection from './components/collection/Collection'

const Home = () => {
  return (
    <div className={style.main}>
      <Fsection/>
      <Cards/>      
      <Ssection/>
      <Collection/>
      <Tsection/>
    </div>
  )
}

export default Home