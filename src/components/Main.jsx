import React from 'react'
import { Row, Col } from 'antd';
import styles from './Main.module.css'

const style = { 
    background: '#0092ff', 
    padding: '8px 0', 
    height: '10vw', 
    margin: '1vw',
    width: '98vw'
 };
 const FlexBox = {
  display: 'flex',
  width: '100%',
}

const Main = ()=> {
    return (
        <div style={FlexBox} className={styles.mainContent}>
            <Row style={style}>
                Part 1
            </Row>
            <Row style={style}>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
            </Row>
            <Row style={style}>
                Part 3
            </Row>
        </div>
    )
}

export default Main