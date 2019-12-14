import { connect } from 'react-redux';
import addCityComponent from '../../views/City/AddCity'
import { addCity } from '../../actions/cityActions'
import { listProvince } from '../../actions/provinceActions'


const mapDispatchToProps = (dispatch) => {
    return {
        addCity:(city) => dispatch(addCity(city)),
        listProvince: () => dispatch(listProvince())
    }
}
const mapStateToProps = (state) => {
    return {
        listProvinces : state.city
    }
}

const CityContainer = connect(mapStateToProps, mapDispatchToProps)(addCityComponent)
export default CityContainer;
