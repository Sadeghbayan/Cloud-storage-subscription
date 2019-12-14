import React, {Component} from 'react';
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
                        <NavLink activeClassName={style.active} to="/user-information"><Icon type="user" /></NavLink>
                        <NavLink activeClassName={style.active} to="/credit-card"><Icon type="credit-card" /></NavLink>
                        <NavLink activeClassName={style.active} to="/confirm"><Icon type="check" /></NavLink>
                    </nav>
            </div>
        );
    }
}

export default SideBarMenu;