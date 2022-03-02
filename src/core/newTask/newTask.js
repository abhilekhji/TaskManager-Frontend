import React, {Component} from "react";
import styles from './styles.module.css';

class NewTask extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.topBar}>
                    <h2 className={styles.heading}>Add New Task</h2>
                    <h2 className={styles.heading}>+</h2>
                </div>
                <div className={styles.inside}>
                    <div className={styles.text}>
                        
                    </div>
                </div>
            </div>
        )
    }
};

export default NewTask;