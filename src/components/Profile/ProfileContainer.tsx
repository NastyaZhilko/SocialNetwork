import React from "react";
import Profile from "./Profile";
import {getProfile, getStatus, ProfileType, savePhoto, saveProfile, updateStatus} from "../../Redux/profile_reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import s from './Profile.module.css'

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserIs: number | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType)=>void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component <PropsType> {
    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserIs
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId as number);
        this.props.getStatus(userId as number);
    }

    componentDidMount() {
       this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if(this.props.match.params.userId != prevProps.match.params.userId)
        this.refreshProfile()
    }

    render() {
        return (
            <div className={s.profileContainer}>
                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserIs: state.auth.id,
    isAuth: state.auth.isAuth


})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    /* withAuthRedirect*/
    //не выбрасывает на логинизацию(удалить комент)
)(ProfileContainer)


/*
let AuthRedirectComponent=withAuthRedirect(ProfileContainer)
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);
*/

