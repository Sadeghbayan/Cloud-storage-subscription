import React, {Component} from 'react';
import style from "./SideBarMenu.module.scss"
import {
    BrowserRouter as Router,
    Link } from "react-router-dom";
import { Icon } from 'antd';
class SideBarMenu extends Component {
    render() {
        return (
            <div className={style.sidebar}>
                    <nav>
                        <Link to="/"><Icon type="heat-map" /></Link>
                        <Link to="/user-information"><Icon type="user" /></Link>
                        {/*<Link to="/"><Icon type="credit-card" /></Link>*/}
                        {/*<Link to="/"><Icon type="check" /></Link>*/}
                    </nav>
            </div>
        );
    }
}

export default SideBarMenu;