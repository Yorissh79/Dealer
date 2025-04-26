import React, { useEffect, useState } from 'react'
import style from './Collection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../../../components/card/Card'
import { getProductThrunk } from '../../../../redux/reducers/cardSlice'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Collection = () => {

    const dispatch = useDispatch()
    const [tra, setTra] = useState(0)
    const data = useSelector(state => state.card.data)

    useEffect(() => {
        dispatch(getProductThrunk())
    }, [])

    const right = () => {
        if (tra <= -1200) {
            setTra(0)
        } else {
            setTra(Number(tra) - 393)
        }
    }

    const left = () => {
        if (tra >= 0) {
            setTra(0)
        } else {
            setTra(Number(tra) + 393)
        }
    }

  return (
    <div className={style.main}>
        <p className={style.p}>Collections</p>
        <div className={style.cards}>
            <div className={style.center} style={{transform: `translate3d(${tra}px, 0px, 0px)`}}>
                {data?.map((item) => <Card item={item} width={"100%"}/>)}
            </div>
            <button className={style.right} onClick={() => right()}><MdOutlineKeyboardArrowRight style={{fontSize:"30px"}}/></button>
            <button className={style.left} onClick={() => left()}><MdOutlineKeyboardArrowLeft style={{fontSize:"30px"}}/></button>
        </div> 
    </div>
  )
}

export default Collection