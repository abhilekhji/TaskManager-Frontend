import React from 'react';
import styles from './header.module.css';
const {Component} = React;
class Header extends Component{
    render() {
        return(
            <div className={styles.container}>
                Task Manager Application
            </div>
        )
    }

}
export default Header;