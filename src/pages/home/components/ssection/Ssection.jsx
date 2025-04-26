import React from 'react'
import style from './Ssection.module.scss'

const Ssection = () => {
  return (
    <div className={style.main}>
        
        <div className={style.imgbox}>
            <img src="https://preview.colorlib.com/theme/dealers/images/model_woman_1.png" alt="" />
        </div>

        <div className={style.text}>
            <p className={style.f}>#New Summer Collection 2019</p>
            <p className={style.s}>Jacket</p>
            <button>shop now</button>
        </div>

    </div>
  )
}

export default Ssection