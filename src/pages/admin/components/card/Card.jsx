import React, { useState } from 'react'
import style from './Card.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductThrunk, getProductTrunk, putProductThrunk } from '../../../../redux/reducers/admincrudSlice'
import { v4 as uuidv4 } from 'uuid';

const Card = ({item}) => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [edit, setEdit] = useState("none")

    const dispatch = useDispatch()
    const data = useSelector(state => state.admincrud.console)

    const deletebtn = () => {
        dispatch(deleteProductThrunk(item.id))
        dispatch(getProductTrunk())
    }

    const editbtn = () => {
        setEdit("block")
    }

    const sendbtn = () => {
        setEdit("none")
        dispatch(putProductThrunk({
            id : item.id,
            data : {
                id : uuidv4(),
                name : name,
                description : description
            }
        }))
        dispatch(getProductTrunk())
        console.log(data)
    }
    
    const cancelbtn = () => {
        setEdit("none")
    }

  return (
    <div className={style.main}>

        <p className={style.f}>Id:{item.id}</p>
        <p className={style.s}>Description:{item.description}</p>
        <p className={style.t}>Name:{item.name}</p>

        <div className={style.btn}>
            <button onClick={() => deletebtn()}>Delete</button>
            <button onClick={() => editbtn()}>Edit</button>
        </div>

        <div className={style.edit} style={{display:`${edit}`}}>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={(e) => sendbtn()}>Send</button>
            <button onClick={(e) => cancelbtn()}>Cancel</button>
        </div>

    </div>
  )
}

export default Card