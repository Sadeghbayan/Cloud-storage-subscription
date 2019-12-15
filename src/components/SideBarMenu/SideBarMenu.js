import React, {Component} from 'react';
import { connect } from 'react-redux';
import style from "./SideBarMenu.module.scss"
import {
    BrowserRouter as Router,
    Link, NavLink } from "react-router-dom";
import { Icon } from 'antd';
class SideBarMenu extends Component {
    render() {
        return (
            <div className={style.sidebar}>
                    <nav>
                        <NavLink exact={true} activeClassName={style.active} to="/"><Icon type="heat-map" /></NavLink>
                        <NavLink activeClassName={style.active} className={this.props.subscription.parameters ? '' : style.disabled} to='/user-information'><Icon type="user" /></NavLink>
                        <NavLink activeClassName={style.active} className={this.props.subscription.user_information ? '' : style.disabled} to="/credit-card"><Icon type="credit-card" /></NavLink>
                        <NavLink activeClassName={style.active} className={this.props.subscription.credit_info ? '' : style.disabled} to="/confirm"><Icon type="check" /></NavLink>
                    </nav>
            </div>
        );
    }
}
const mapStateToProps = function(state) {
    return {
        subscription: state.subscription,
    }
}
export default connect(mapStateToProps)(SideBarMenu);