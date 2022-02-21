import React from  'react';

import {Table,Space} from 'antd';
import AllavailableHOUSE from '../../asset/img/constant/house.json';
import AllavailabeUsers from'../../asset/img/constant/infomation.json';
import{EyeOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import  DashboardLayout from "../../components/DashboardLayout";
const Column =[
    {
        title:'House Number',
        dataIndex:'houseNo',
        key:'houseNo',

    },

    {
        title:'District',
        dataIndex:'district',
        key:'district',

    },
    {
        title:'Sector',
        dataIndex:'sector',
        key:'sector',

    },
   
    {
        title:'Actions',
        dataIndex:'action',
        render:(text,record)=>(
            <Space size ='middle'>
             <a><EyeOutlined></EyeOutlined></a>
             <a><EditOutlined></EditOutlined></a>
             <a><DeleteOutlined></DeleteOutlined></a>
            </Space>
        )

    },
];

const Column1 =[
    {
        title:"Name",
        dataIndex:"Name",
        key:"Name",

    },

    {
        title:'Phone_Number',
        dataIndex:'PhoneNumber',
        key:'PhoneNumber',

    },
    
    {
        title:'Actions',
        dataIndex:'action',
        render:(text,record)=>(
            <Space size ='middle'>
             <a style={{color:"green"}}>Accept</a>
             <a style={{color:"red"}}>Reject</a>
            </Space>
        )

    },
   
];
const AllHouse=()=>{
    return(
        <DashboardLayout>
      <Table columns={Column} dataSource={AllavailableHOUSE}/>
      <Table columns={Column1} dataSource={AllavailabeUsers}/>
      </DashboardLayout>
      
    )
}
export default AllHouse;