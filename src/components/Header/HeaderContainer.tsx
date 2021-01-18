import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {auth, logOut} from "../../Redux/auth-reducer";


type MapStateToPropsType = {
    isAuth:boolean
    login:string|null
}
type MapDispatchToPropsType={
    auth:()=>void
    logOut:()=>void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType=OwnPropsType
class HeaderContainer extends React.Component <PropsType>{
    componentDidMount() {
        this.props.auth()
    }

    render() {

        return <Header {...this.props} isAuth={this.props.isAuth} logOut={this.props.logOut} login={this.props.login}/>
    }
}
const mapStateToProps=(state: AppStateType):MapStateToPropsType=>
    ({isAuth: state.auth.isAuth,
        login: state.auth.login
    })

export default connect(mapStateToProps,{auth, logOut})(HeaderContainer);
