import React,{useState} from "react"
import 'antd/dist/antd.css'
import { Table,Button,Modal } from 'antd';
import { Form, Input, Select } from 'antd';
const { Option } = Select;

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

export default(({visible,setVisible,userId,sendPackage})=>{
    const[ loading,setLoading]=useState(false)
    const[valueCategory, setValueCategory]= useState({
        name:"",
        category:"",
    })


   const handleChange=(e,value)=> setValueCategory({...valueCategory,[e.target ? e.target.name :e.name]: e.target ? e.target.value :e.value})
   
    const handleCancel = () => setVisible(false)

    
console.log(valueCategory)
    return(
        <>
             <Modal
          visible={visible}
          title="Title"
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>
           
          ]}
        >
          <Form
      {...layout}
      name="basic"
    >
      <Form.Item
        label="Name"
        rules={[{ required: true, message: 'Please input your package name!' }]}
      >
        <Input
        name="name"
            onChange={(e)=>handleChange(e)}
            value={valueCategory.name}
        />
      </Form.Item>
      <Form.Item
        label="Category"
        rules={[{ required: true, message: 'Please input your package category!' }]}
      >
         <Select
            placeholder="Select a option and change input text above"
            onChange={(value,e)=>handleChange(e)}
            allowClear
          >
            <Option name="category" value="grande" key="1">grande</Option>
            <Option name="category" value="mediano" key="2">mediano</Option>
            <Option name="category" value="chico" key="3">chico</Option>
          </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={()=>sendPackage({
            ...valueCategory,
            userId
        })}>
          Send Package
        </Button>
      </Form.Item>

    </Form>
        </Modal>
        </>
    )
})