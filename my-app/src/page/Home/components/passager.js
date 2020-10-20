import React,{useState} from "react"
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'
import h from '../home.module.scss'
import { Table,Button,Modal } from 'antd';
import ModalPackage from "./modalAdd"
import { Form, Input, Select } from 'antd';




  
export default ({passager,sendPackage,removePackage,postUser})=>{
  const[ visible,setVisible]=useState(false)
  const [ userId, setUserId]= useState(null)
  const [ user,setUser]= useState({
    full_name:"",
    flight:""
  })
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const layout = {
    layout :"inline",
    labelCol: { span: 20 },
    wrapperCol: { span: 20 },
  };

const onChange =  (e)=>{
  setUser({...user,[e.target.name]:e.target.value}) 
}


console.log(user)
  const columns = [
    { title: 'id', dataIndex: 'id', key: 'id' },
    { title: 'FullName', dataIndex: 'full_name', key: 'full_name' },
    { title: 'Air', dataIndex: 'flight', key: 'flight' },
    {
      title: 'Add Package',
      dataIndex: '',
      key: 'x',
    render: ({id}) => {
    return(
    <a 
    onClick={()=>showModal(id)}
    style={{margin:"0 auto"}}>Add</a>
    )}},
       {
        title: 'Retired Package',
        dataIndex: '',
        key: 'x',
      render: ({id}) => {
      return(
      <a  onClick={()=>removePackage(id)}style={{color:"red",margin:"0 auto", width:"100%"}} >Retired</a>
     )}}
  ]

  const columnsPackage = [
    { title: 'Package', dataIndex: 'name', key: 'name' },
    { title: 'Category', dataIndex: "category", key: "category" },
    { title: 'State', dataIndex: 'state', key: 'state' },
   
  ];

  const showModal = (id) =>{ 
    setUserId(id)
    setVisible(true)}
    return(
        <div className={h.table}>
          
        <Row>
          <Col span={24}>
          <Form
      {...layout}
      name="basic"
      className={h.form}
    >
      <Form.Item
        label="Name"
        rules={[{ required: true, message: 'Please input your  name!' }]}
      >
        <Input
        name="full_name"
        onChange={(e)=>onChange(e)}
        value={user.full_name}


/>
      </Form.Item>
      <Form.Item
        label="Air"
        rules={[{ required: true, message: 'Please input your Air!' }]}
      >
        <Input
        name="flight"
        onChange={(e)=>onChange(e)}
        value={user.flight}

        />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
        disabled={user.flight && user.full_name ? false:true} 
        type="primary" 
        htmlType="submit" 
        onClick={()=>postUser(user)} >
          Send User
        </Button>
      </Form.Item>
      </Form>
          </Col>
         </Row>
         <Row>
         <Col span={24}>

         <Table
            columns={columns}
            expandable={
                {
             expandedRowRender: record => <Table 
             pagination={false}
             columns={columnsPackage} dataSource={record.packages}/>,
                   }}
    dataSource={passager}
  />
         </Col>

         </Row>
         <ModalPackage
         userId={userId}
            sendPackage={sendPackage}
         setVisible={setVisible}
         visible={visible}></ModalPackage>
      
        </div>
    )
}