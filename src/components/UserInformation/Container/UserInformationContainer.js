import { connect } from 'react-redux';
import userInformationComponent from '../UserInformation'
import { addUserInformation } from '../../../store/actions/userInformation'


const mapDispatchToProps = (dispatch) => {
    return {
        addUserInformation:(userInfo) => dispatch(addUserInformation(userInfo)),
    }
}
const mapStateToProps = (state) => {
    return {
        user_information : state.subscription.user_information
    }
}

const UserInformationContainer = connect(mapStateToProps, mapDispatchToProps)(userInformationComponent)
export default UserInformationContainer;
