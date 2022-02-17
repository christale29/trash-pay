import React from 'react';
import{Form,Input,Space,DatePicker,InputNumber,Button,Select} from 'antd';
const NewHouseView=()=>{
    const onFinish=(values)=>{
       console.log(values);
    }
    const { Option } = Select;
    
    return(
      <>
        <Form onFinish={onFinish}>
          <Form.Item name='houseNo'label='House Number'rules={[{required:true}]
          }>
        <Input type='number'/>
          </Form.Item>

          <Form.Item name='district'label='District'rules={[{required:true}]
          }>
        <Input/>
        </Form.Item>

        <Form.Item name='sector'label='Sector'rules={[{required:true}]
          }>
        <Input/>
        </Form.Item>

        <Button htmlType='submit' type='primary'> Register House</Button>
        </Form>
        </>

    )
}
export default NewHouseView;