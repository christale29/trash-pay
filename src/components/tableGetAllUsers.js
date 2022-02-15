import React, { useState, useEffect } from "react";
import { Table } from "antd";
import TrashApis from "../services/trashApi"
// import { useState, useEffect } from "react"


const AllUsers = () => {
    const [allUsersData, setAllUsersData] = useState([]);

    useEffect(() => {
        TrashApis.getAllUsers().then((res) => {
            console.log(res);
            setAllUsersData(res.data.data);
        });
    }, []);

    const userColumn = [
        {
            title: "firstName",
            dataIndex: "firstName",
            key: "firstName",



        },
        {
            title: "lastName",
            dataIndex: "lastName",
            key: "lastName",



        },
        {
            title: "phone",
            dataIndex: "phone",
            key: "phone"



        },
    ]
    return (
        <div
            style={{
                width: "100%",
                height: "60vh",
                background: "grey",
                padding: "50px"
            }}>
            <h1>AllUsers</h1>
            <Table columns={userColumn} dataSource={allUsersData}/>

           
        </div>
    )


}

export default AllUsers;