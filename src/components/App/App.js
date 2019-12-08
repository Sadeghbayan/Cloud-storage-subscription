import React, {Component, Suspense} from 'react';
import Footer from '../Footer/Footer'
import Sidebar from '../SideBarMenu/SideBarMenu'

import styles from './App.module.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Parameters from '../../components/Parameters/Parameters';
import UserInformation from '../../components/UserInformation/UserInformation';
import routes from '../../routes';

class App extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
                <div>
                    <div className="container">
                        <div className={styles.innerWrapper}>
                            <div className={styles.leftbox}>
                                <Sidebar/>
                            </div>
                            <div className={styles.rightbox}>
                                <Suspense fallback={this.loading()}>
                                    <Switch>
                                        {routes.map((route, idx) => {
                                            return route.component ? (
                                                <Route
                                                    key={idx}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    name={route.name}
                                                    render={props => (
                                                        <route.component {...props} />
                                                    )} />
                                            ) : (null);
                                        })}

                                    </Switch>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>

        );
    }
}

export default App;