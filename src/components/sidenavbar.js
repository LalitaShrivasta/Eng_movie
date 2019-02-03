import React, { Component } from 'react';
// import BottomAppBar from './commit.js';
import {Search} from './search.js';

import './sidenavbar.css'
import {
    Layout, Menu, Breadcrumb, Icon,
  } from 'antd';
  
  const {
    Header, Content, Footer, Sider,
  } = Layout;
  const SubMenu = Menu.SubMenu;
  
  class Sidenavbar extends React.Component {
    state = {
      collapsed: false,
    };
  
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
  
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>Easy</span></span>}
              >
                <Menu.Item key="3">Notting Hill</Menu.Item>
                <Menu.Item key="4">Jurassic Park</Menu.Item>
                <Menu.Item key="5">The Hunger Games</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>Medium</span></span>}
              >
                <Menu.Item key="6">Clueless</Menu.Item>
                <Menu.Item key="8">The Queen</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={<span><Icon type="team" /><span>Hard</span></span>}
              >
                <Menu.Item key="6">The King's speech</Menu.Item>
                <Menu.Item key="8">The Wizard of Oz</Menu.Item>
              </SubMenu>

            </Menu>
          </Sider>
          {/* <BottomAppBar /> */}
          <Search />


        </Layout>
      );
    }
  }
  
  export default Sidenavbar;
  