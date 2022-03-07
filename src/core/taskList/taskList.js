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
            headers: { }
        };
          
        await axios(config)
        .then(res => {
            if(res.data.status) {
                this.setState({data: res.data.data})
            }
        })
        .catch(err => {
            console.log("error: ", err);
        });
    }

    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <div className={styles.container}>
                {data.map((item)=><ListElement key={item._id} name={item.name} isCompleted={item.completed}/>)}
            </div>
        );
    }
}

export default TaskList;