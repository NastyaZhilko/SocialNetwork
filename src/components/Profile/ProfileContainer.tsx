import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {ProfileType, setUsersProfile} from "../../Redux/profile_reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../Api/Api";
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
}

type MapDispatchToPropsType = {
    setUsersProfile: (profile: ProfileType) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component <PropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 2
        }
        usersAPI.getProfile(userId)
            .then(data => {
                this.props.setUsersProfile(data)
            })
    }


    render() {
        return (
            <div className='app-wrapper-content'>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


const WithUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);
