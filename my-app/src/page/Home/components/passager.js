import React from "react"
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'
import h from '../home.module.scss'
import { Table } from 'antd';

const columns = [
    { title: 'FullName', dataIndex: 'name', key: 'name' },
    { title: 'Air', dataIndex: 'age', key: 'age' },
    {
      title: 'Package',
      dataIndex: '',
      key: 'x',
      render: ({key}) => <a onClick={()=>console.log(key)}>Delete</a>,
    },
  ];

  const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      description: 'This not expandable',
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];
export default ()=>{
    return(
        <div className={h.table}>
        <Row>
          <Col span={24}>col</Col>
         </Row>
         <Row>
         <Col span={24}>

         <Table
            columns={columns}
            expandable={{
             expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
            rowExpandable: record => record.name !== 'Not Expandable',
            }}
    dataSource={data}
  />,
         </Col>

         </Row>
        </div>
    )
}