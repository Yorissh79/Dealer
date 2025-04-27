import React, { useEffect, useState } from 'react'
import style from './Dashboard.module.scss'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { getProductTrunk, postProductThrunk } from '../../../../redux/reducers/admincrudSlice'
import Card from '../card/Card'

const Dashboard = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.admincrud.data)
    const loading = useSelector(state => state.admincrud.loading)
    const error = useSelector(state => state.admincrud.error)

    const formik = useFormik({
        initialValues: {
            description : "",
            name : ""
        },
        onSubmit: (values) => {
            dispatch(postProductThrunk(values))
            dispatch(getProductTrunk())
        }
    })

    useEffect(() => {
        dispatch(getProductTrunk())
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>404</p>

  return (
    <div className={style.main}>
      
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' placeholder='Name' value={formik.values.name} onChange={formik.handleChange}/>
            <label htmlFor="description">Description</label>
            <input type="text" id='description' name='description' value={formik.values.description} onChange={formik.handleChange}/>
            <button type='submit'>Submit</button>
        </form>

        {data?.map(item => <Card item={item}/>)}

    </div>
  )
}

export default Dashboard