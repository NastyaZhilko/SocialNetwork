import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {auth, logOut} from "../../Redux/auth-reducer";
import {ProfileType} from "../../Redux/profile_reducer";


type MapStateToPropsType = {
    isAuth:boolean
    login:string|null
    photo : string | undefined
}
type MapDispatchToPropsType={
    auth:()=>void
    logOut:()=>void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType=OwnPropsType
class HeaderContainer extends React.Component <PropsType>{

    render() {

        return <Header {...this.props}
                       isAuth={this.props.isAuth}
                       logOut={this.props.logOut}
                       login={this.props.login}
                       photo={this.props.photo}
        />
    }
}
const mapStateToProps=(state: AppStateType):MapStateToPropsType=>
    ({isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.profilePage.profile?.photos.large
    })

export default connect(mapStateToProps,{auth, logOut})(HeaderContainer);
