import React, {Component} from 'react';
import ListElement from './listElement';
import styles from './styles.module.css';
import axios from 'axios';
// import data from './data';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount = () => {
        this.fetchAllTasks();
    }

    fetchAllTasks = async () => {
        const config = {
            method: 'get',
            url: 'http://localhost:8000/api/tasks/getAllTasks',
        };
          
        axios(config)
        .then(function (response) {
            console.log("ahise: ",response.data);
        })
        .catch(function (error) {
            console.log("nai aha: ", error);
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
                {data.map((item)=><ListElement key={item._id} name={item.name} isCompleted={item.completed}/>)}
            </div>
        );
    }
}

export default TaskList;