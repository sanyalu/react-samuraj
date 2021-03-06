import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {compose} from "redux";
import withRouter from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId;
            if (!userId) {

            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }

    render() {


        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorisedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);