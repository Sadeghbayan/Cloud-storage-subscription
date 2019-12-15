import { connect } from 'react-redux';
import parametersComponent from '../../Parameters/Parameters'
import { addParameters } from '../../../store/actions/parameters'


const mapDispatchToProps = (dispatch) => {
    return {
        addParameters:(parameters) => dispatch(addParameters(parameters)),
    }
}
const mapStateToProps = (state) => {
    return {
        parameters : state.subscription.parameters
    }
}

const ParametersContainer = connect(mapStateToProps, mapDispatchToProps)(parametersComponent)
export default ParametersContainer;
