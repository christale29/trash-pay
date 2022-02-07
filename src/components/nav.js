import React from "react";
import "./header.css";
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Search } = Input;

const onSearch = value => console.log(value);


const Nav=()=>{
    
    return(
        <div className="main-nav">
            <div className="navbar-link">
                <ul>
                  
                    <li>
                    <div style={{
      display: 'block'
    }}>
     
      <>
        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0">
                Register the house
              </Menu.Item>
              <Menu.Item key="1">
              Justify your payment
              </Menu.Item>
              <Menu.Item key="1">
              See your records
              </Menu.Item>
            </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Payment Information<DownOutlined />
          </a>

         
        </Dropdown>
      </>
    </div>
                    </li>
                  
                    <li>

                    <div style={{
      display: 'block'
    }}>
     
      <>
        <Dropdown
          overlay={(
            <Menu>
              <Menu.Item key="0">
                Login
              </Menu.Item>
              <Menu.Item key="1">
              Sign_Up
              </Menu.Item>
              
            </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Account<DownOutlined />
          </a>

         
        </Dropdown>
      </>
    </div>   
                    </li>
                    <li> 
                        <Space> <Search placeholder="input search text" onSearch={onSearch} style={{ width: 500 }} /></Space>
                       
                    </li>

                </ul>
                </div>
            

        </div>
    )
}
export default Nav;