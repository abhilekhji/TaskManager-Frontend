import { Col, Row } from 'antd';
import React,{Component} from "react";
import NewTask from "../newTask";
import TaskList from "../taskList";

import styles from './app.module.css';
class App extends Component {
  render() {
    return (
      <>
        <div className={styles.container}> 
              <TaskList />  
              <NewTask />  
        </div>
      </>
    );
  }
}

export default App;
