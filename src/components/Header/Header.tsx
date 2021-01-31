import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType={
    isAuth:boolean
    login:string|null
    logOut:()=>void
}
const Header =React.memo((props:HeaderPropsType)=> {

  return  <header className={s.header}>
        <img src='https://flosium.ru/imagehost/158/med_kak-razvivaetsya-cvetok-gerbery-v-domashnih-usloviyah.jpg'/>
  <div className={s.loginBlock}>
      {props.isAuth
          ? <div>{props.login} - <button onClick={props.logOut}>Log out</button> </div>
          :
      <NavLink to={'/login'}>Login</NavLink>}
  </div>
  </header>
})
export default Header;
