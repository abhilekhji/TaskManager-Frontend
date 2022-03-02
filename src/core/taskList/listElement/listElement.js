import React, {Component} from 'react';
import styles from './styles.module.css';
class ListElement extends Component {
    render() {
        const {name,isCompleted} = this.props;
        return(
            <div className={styles.container}>
                <div className={isCompleted==='true'?styles.completedTask:styles.incompletedTask}>{name}</div>
            </div>
        );
    }
};
export default ListElement;