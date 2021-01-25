import React from "react";
import Profile from "./Profile";
import {getProfile, getStatus, ProfileType, updateStatus} from "../../Redux/profile_reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserIs:number|null
    isAuth:boolean
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

        let userId:number|null = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserIs
            if (!userId){this.props.history.push('/login')}
        }
        this.props.getProfile(userId as number);
        this.props.getStatus(userId as number);
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
    status: state.profilePage.status,
    authorizedUserIs:state.auth.id,
    isAuth:state.auth.isAuth


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

