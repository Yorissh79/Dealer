import React from 'react'
import style from './Card.module.scss'

const Card = ({item, width}) => {
  return (
    <div className={style.main} style={{width:`${width}`}}>

        <div className={style.imgbox}>

            <img src={item.image} alt="Photo" />

        </div>

        <div className={style.text}>

            <p className={style.f}>{item.name}</p>
            <p className={style.s}>{item.des}</p>
            <div className={style.price}>
                <strong className={style.p}>{item.price}</strong>
                <del className={style.d}>{item.dis}</del>
            </div>
        </div>

        {item.sale == "true" ? <p className={style.sale}>Sale</p> : ""}

    </div>
  )
}

export default Card