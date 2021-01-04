import React from "react";
import Profile from "./Profile";
import {getProfile, ProfileType} from "../../Redux/profile_reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter, Redirect} from "react-router-dom";

/*type ResponseType={
    aboutMe:string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription:string
    fullName: string
    userId: number
    photos: PhotosType

}*/
type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth:boolean
}

type MapDispatchToPropsType = {
    getProfile:(userId:number)=>void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component <PropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
    }


    render(){
    if (this.props.isAuth===false)return <Redirect to={'/login'}/>
        return (

            <div className='app-wrapper-content'>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


const WithUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);
