import React, {Component} from 'react';
import styles from './Footer.module.scss'

class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <p><a href=""> Subscription order process for a cloud storage </a> </p>
            </footer>
        );
    }
}

export default Footer;