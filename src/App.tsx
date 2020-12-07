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
import Dialogs from "./components/Dialogs/Dialogs";

/*type PropsType ={
    store: StoreType
}*/

const App = () => {
   // let state=store.getState();
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
               <div className='navigation'>
                <NavBar/>
                {/*<Sidebar />*/}
               </div>
                <div className='app-wrapper-content'>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                </div>
            </div>
        </BrowserRouter>)
}


export default App;

