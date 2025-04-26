import React from 'react'
import style from './Tsection.module.scss'

const Tsection = () => {
  return (
    <div className={style.main}>
        
        <div className={style.imgbox}>
            <img src="https://preview.colorlib.com/theme/dealers/images/model_5.png" alt="" />
        </div>

        <div className={style.text}>
            <p className={style.f}>#New Summer Collection 2019</p>
            <p className={style.s}>New Denim Coat</p>
            <button>shop now</button>
        </div>

    </div>
  )
}

export default Tsection