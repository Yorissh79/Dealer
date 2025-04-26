import React, { useState } from 'react'
import style from './Footer.module.scss'
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiHeart } from 'react-icons/hi';
import axios from 'axios';

const Footer = () => {

  const [data, setData] = useState("")

  const send = () => {
    axios.post("https://northwind.vercel.app/api/categories", {
      email : data
    })
  }

  return (
    <div className={style.main}>

      <div className={style.top}>

        <div className={style.f}>
          <p className={style.par}>About Us</p>        
          <p className={style.long}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates sed dolorum excepturi iure eaque, aut unde.</p>
          <p>Subscribe</p>
          <div className={style.input}>
            <input type="text" placeholder='Email' onChange={(e) => setData(e.target.value)}/>
            <button onClick={() => send()}>Send</button>
          </div>
        </div>

        <div className={style.s}>
          
          <p className={style.par}>Quick Links</p>

          <div className={style.center}>

            <div className={style.left}>
              <p className={style.para}>Sell online</p> 
              <p className={style.para}>Features</p> 
              <p className={style.para}>Shopping cart</p> 
              <p className={style.para}>Store builder</p>   
            </div>

            <div className={style.left}>
              <p className={style.para}>Sell online</p> 
              <p className={style.para}>Features</p> 
              <p className={style.para}>Shopping cart</p> 
              <p className={style.para}>Store builder</p>   
            </div>

            <div className={style.left}>
              <p className={style.para}>Sell online</p> 
              <p className={style.para}>Features</p> 
              <p className={style.para}>Shopping cart</p> 
              <p className={style.para}>Store builder</p>   
            </div>

          </div>


        </div>

        <div className={style.t}>
          <p className={style.paraq}>Contact Info</p>        
          <div className={style.div}>
            <IoLocation style={{color:"#207DFF"}}/>
            <div className={style.ls}>
              <p>203 Fake St. Mountain View, </p>
              <p>San Francisco, California, USA</p>
            </div>
          </div>

          <div className={style.div}>
              <BsFillTelephoneFill style={{color:"#207DFF", fontSize:"22px"}}/>
              <a href="tel://+2 392 3929 210">+2 392 3929 210</a>
          </div>

          <div className={style.div}>
              <MdEmail style={{color:"#207DFF", fontSize:"22px"}}/>
              <p>emailaddress@domain.com</p>
          </div>

        </div>

      </div>

      <div className={style.bottom}>
        <p className={style.par}>Copyright ©2025 All rights reserved | This template is made with <HiHeart/> by <a href="/">Colorlib</a></p> 
      </div>

    </div>
  )
}

export default Footer