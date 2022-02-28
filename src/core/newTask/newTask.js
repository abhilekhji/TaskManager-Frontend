import React, {Component} from "react";
import styles from './styles.module.css';

class NewTask extends Component {
    render() {
        return (
            <>
                <div className={styles.container}>
                    <div className={styles.topBar}>
                        <h2>Add New Task</h2>
                        <h2>+</h2>
                    </div>
                </div>
            </>
        )
    }
};

export default NewTask;