import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType={
    isAuth:boolean
    login:string|null
    logOut:()=>void
}
const Header: React.FC<HeaderPropsType> =React.memo(({isAuth, login, logOut})=> {

  return  <header className={s.header}>
        <img src='https://flosium.ru/imagehost/158/med_kak-razvivaetsya-cvetok-gerbery-v-domashnih-usloviyah.jpg'/>
  <div className={s.loginBlock}>
      {isAuth
          ? <div>{login} - <button onClick={logOut}>Log out</button> </div>
          :
      <NavLink to={'/login'}>Login</NavLink>}
  </div>
  </header>
})
export default Header;
