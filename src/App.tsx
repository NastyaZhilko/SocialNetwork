import React, {Suspense} from 'react';
import './App.css';
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import {UsersPage} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reduser";
import {AppStateType} from "./Redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./HOC/WithSuspense";
import Footer from "./components/Footer/Footer";


//lazy
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const Login = React.lazy(() => import("./components/Login/Login"));

//suspended
export const SuspendedDialogs = withSuspense(DialogsContainer);
export const SuspendedProfile = withSuspense(ProfileContainer);
export const SuspendedLogin = withSuspense(Login);

type MapDispatchToPropsType = {
    initializeApp: () => void
    initialized: boolean
}
type MapStateToPropsType = {
    initialized: boolean
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = OwnPropsType


class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            // @ts-ignore
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='navigation'>
                    <NavBar/>
                    {/*<Sidebar />*/}
                </div>
                <div className='app-wrapper-content'>

                        <Redirect from ='/' to='/profile'/>
                        <Route path='/music' component={Music}/>
                        <Route path='/news' component={News}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/dialogs' render={() => <SuspendedDialogs/>}/>
                        <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                        <Route path='/users' render={() => <UsersPage pageTitle={'Samurai'}/>}/>
                        <Route path='/login' render={() => <SuspendedLogin/>}/>

                </div>
                <Footer/>
            </div>)
    }
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(MapStateToProps, {initializeApp}))(App);

