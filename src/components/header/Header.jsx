import React from "react";
import style from "./Header.module.scss";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className={style.main}>
      <div className={style.logo}>
        <Link to={"/"}>dealers</Link>
      </div>

      <div className={style.center}>
        <ul className={style.pages}>
          <li className={style.col}>
            <a>Collection <MdOutlineKeyboardArrowDown style={{fontSize:"20px"}}/> </a>
            <ul className={style.subf}>
              <li>Men</li>
              <li>Women</li>
              <li>Children</li>
              <li className={style.sub}>
                Sub menu <MdOutlineKeyboardArrowRight style={{fontSize:"20px"}}/>
                <ul className={style.subs}>
                  <li>Men</li>
                  <li>Women</li>
                  <li>Children</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/catalogs"}>catalogs</Link>
          </li>
          <li>
            <Link to={"/contact"}>contact</Link>
          </li>
          <li>
            <Link to={"/admin"}>Admin</Link>
          </li>
        </ul>
      </div>

      <div className={style.icons}>
        <CiSearch />
        <CiHeart />
        <GiShoppingBag />
      </div>

      <div className={style.burger}>
          <GiHamburgerMenu style={{fontSize:"20px"}}/>
      </div>
    </div>
  );
};

export default Header;
