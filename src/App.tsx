import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import {StoreType} from "./Redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type PropsType ={
    store: StoreType
}

const App = (props: PropsType) => {
    let state=props.store.getState();
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
               <div className='navigation'>
                <NavBar/>
                <Sidebar sidebar={state.sidebar}/>
               </div>
                <div className='app-wrapper-content'>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route exact path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                </div>
            </div>
        </BrowserRouter>)
}


export default App;

