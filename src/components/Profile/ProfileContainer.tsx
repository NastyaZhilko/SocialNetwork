import React from "react";
import Profile from "./Profile";
import {getProfile, getStatus, ProfileType, updateStatus} from "../../Redux/profile_reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

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
    status: string

}

type MapDispatchToPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus:(status:string)=>void

}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component <PropsType> {

    componentDidMount() {
        debugger
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 13167
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (

            <div className='app-wrapper-content'>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status


})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    /* withAuthRedirect*/
    //не выбрасывает на логинизацию(удалить комент)
)(ProfileContainer)


/*
let AuthRedirectComponent=withAuthRedirect(ProfileContainer)
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);
*/

