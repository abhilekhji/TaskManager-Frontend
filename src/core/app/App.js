import { Col, Row } from "antd";
import React,{Component} from "react";
import NewTask from "../newTask";

import styles from './app.module.css';
class App extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <Row>
            <Col span={16}></Col>
            <Col span={8}>
              <NewTask />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default App;
