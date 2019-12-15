import { connect } from 'react-redux';
import creditComponent from '../Credit'
import { addCredit } from '../../../store/actions/credit'


const mapDispatchToProps = (dispatch) => {
    return {
        addCredit:(creditInfo) => dispatch(addCredit(creditInfo)),
    }
}
const mapStateToProps = (state) => {
    return {
        credit_info : state.subscription.credit_info
    }
}

const CreditContainer = connect(mapStateToProps, mapDispatchToProps)(creditComponent)
export default CreditContainer;
