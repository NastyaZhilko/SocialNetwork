import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='navigation'>
                    <NavBar/>
                    {/*<Sidebar />*/}
                </div>
                <div className='app-wrapper-content'>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>

                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>)
}


export default App;
