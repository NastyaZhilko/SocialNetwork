import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {setAuthUserData} from "../../Redux/auth-reducer";


type MapStateToPropsType = {
    isAuth:boolean
    login:string|null
}
type MapDispatchToPropsType={
    setAuthUserData:(id: number|null, email: string|null, login: string|null)=>void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType=OwnPropsType
class HeaderContainer extends React.Component <PropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true})
            .then(response => {
if (response.data.resultCode===0){
    let {id,login, email}=response.data.data
    this.props.setAuthUserData(id, login, email)
}
            })
    }

    render() {

        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
    }
}
const mapStateToProps=(state: StoreType):MapStateToPropsType=>
    ({isAuth: state.auth.isAuth,
        login: state.auth.login
    })

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);
