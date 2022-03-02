import React, {Component} from 'react';
import ListElement from './listElement';
import styles from './styles.module.css';
import data from './data';

class TaskList extends Component {
    render() {
        console.log(data);
        return (
            <div className={styles.container}>
                {data.map((item)=><ListElement key={item._id} name={item.name} isCompleted={item.completed}/>)}
            </div>
        );
    }
}

export default TaskList;