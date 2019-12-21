import React, {Component, Suspense} from 'react';
import Footer from '../Footer/Footer'
import Sidebar from '../SideBarMenu/SideBarMenu'
import { connect } from 'react-redux';
import styles from './App.module.scss'
import {
    Redirect,
    Switch,
    Route,
    withRouter
} from "react-router-dom";

import routes from '../../routes';

const fakeAuth = {
    authenticate(cb) {
        if(cb.subscription.length === 0 && cb.location.pathname !== '/')
            return false
        return true
    },

};

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
                                                    render={({ props }) =>
                                                        fakeAuth.authenticate(this.props) ? (
                                                            <route.component {...props} />
                                                        ) : (
                                                            <Redirect
                                                                to={{
                                                                    pathname: "/",
                                                                }}
                                                            />
                                                        )
                                                    }
                                                />
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
const mapStateToProps = (state) => {
    return {
        subscription: state.subscription,
    }
}
export default withRouter(connect(mapStateToProps, null)(App));