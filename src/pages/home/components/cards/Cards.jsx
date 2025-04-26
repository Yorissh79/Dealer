import React, { useEffect } from 'react'
import style from './Cards.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThrunk } from '../../../../redux/reducers/cardSlice'
import Card from '../../../../components/card/Card'

const Cards = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.card.data)

    useEffect(() => {
        dispatch(getProductThrunk())
    }, [])

  return (
    <div className={style.main}>
        
        {data?.map((item) => <Card item={item} width={"33%"}/>)}

    </div>
  )
}

export default Cards