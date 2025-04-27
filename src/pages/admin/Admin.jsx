import React, { useEffect, useState } from 'react'
import style from './Admin.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductTrunk, postProductThrunk } from '../../redux/reducers/admincrudSlice'
import Card from './components/card/Card'
import { v4 as uuidv4 } from 'uuid';

const Admin = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.admincrud.data)
  const loading = useSelector(state => state.admincrud.loading)
  const error = useSelector(state => state.admincrud.error)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const send = () => {
      dispatch(postProductThrunk({
        id : uuidv4(),
        name : name,
        description : description
      }))
      dispatch(getProductTrunk())
  }

  useEffect(() => {
    dispatch(getProductTrunk())
  }, [])

  const handleInput = (e) => {
    if (e.key === "Enter") {
      send()
    }  
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  return (
    <div className={style.main}>

      {data?.map(item => <Card item={item}/>)}


      <div className={style.post}>
        <div className={style.left}>
          <p>Name</p>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className={style.left}>
          <p>Description</p>
          <input type="text" value={description} onKeyDown={(e) => handleInput(e)} onChange={(e) => setDescription(e.target.value)}/>
        </div>

        <button onClick={() => send()}>Post</button>
      </div>

    </div>
  )
}

export default Admin