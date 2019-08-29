import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

export default function Menus() {
    return (
        <div className="row">
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    Hover me <Icon type="down" />
                </a>
            </Dropdown>

            <Menu mode="horizontal">
                <Menu.Item>
                    1st menu item
                </Menu.Item>
                <Menu.Item>
                    2nd menu item
                </Menu.Item>
                <Menu.Item>
                    3rd menu item
                </Menu.Item>
            </Menu>
        </div>
    );
}