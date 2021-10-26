import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {ProfileType} from "../../Redux/profile_reducer";
import avatar1 from "../../assets/img/avatar1.png";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    photo: string | undefined
    logOut: () => void
}
const Header: React.FC<HeaderPropsType> = React.memo(({isAuth, login, logOut, photo}) => {


    return <header className={s.header}>
        <div>
            <h2>Social Network</h2>
        </div>
        <div className={s.loginBlock}>
            {isAuth
                ? <div>
                    <img src={photo || avatar1} alt=""/>

                    {login} - <button onClick={logOut}>Log out</button>
            </div>

                :
                <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
})
export default Header;
