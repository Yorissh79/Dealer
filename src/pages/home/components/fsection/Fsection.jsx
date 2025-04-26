import React from 'react'
import style from './Fsection.module.scss'

const Fsection = () => {
  return (
    <div className={style.main}>

        <div className={style.left}>
            <h1>Madewell</h1>
            <p>Summer Collection</p>
            <div className={style.text}>
                <strong>1,499</strong>
                <del>$1,999</del>
            </div>
            <div className={style.btn}>
                <button className={style.f}>shop now</button>
                <button className={style.s}>shop now</button>
            </div>
        </div>

        <div className={style.right}>
            <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png" alt="" />
        </div>

    </div>
  )
}

export default Fsection