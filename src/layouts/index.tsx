/*
 * @Descripttion:
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-01-18 09:32:52
 * @LastEditors: ekko
 * @LastEditTime: 2021-01-20 09:22:45
 */
import React from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  MailOutlined,
  AntDesignOutlined,
  StarOutlined,
  AlibabaOutlined,
  AlipayOutlined,
} from '@ant-design/icons';
import './index.less';
import { Link, history, NavLink, useHistory, useLocation } from 'umi';

const { Header, Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;

const handleClickLink = () => {
  // history.push('/page1');
  history.push({
    pathname: '/page1',
    query: {
      id: '1',
    },
  });
};

/**
 *
 * @param props
 */
const index = (props: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(borken) => {
          console.log(borken, '111');
        }}
        onCollapse={(coll, type) => {
          console.log(coll, type, '11222');
        }}
      >
        <div className="logo">
          <div className="text">华唐</div>
        </div>
        {/* 这是sider */}
        <Menu
          theme="dark"
          mode="inline"
          className="menu"
          selectedKeys={[location.pathname]} // 这里的selectedKeys是重点，如果使用default
          // 就会出现一开始初始化的路由是'/' ,导致无法选中，但是现在这个是会随路由变化而变化的
          // defaultOpenKeys={['sub1']}
          onClick={(e) => {
            console.log(e);
          }}
        >
          <Menu.Item key="/course" icon={<MailOutlined />}>
            <NavLink to="/course">课程在线</NavLink>
          </Menu.Item>
          <Menu.Item key="/about" icon={<AntDesignOutlined />}>
            <NavLink to="/about">关于我们</NavLink>
          </Menu.Item>
          {/* <SubMenu
            key="sub1"
            icon={<MailOutlined />}
            title="课程在线"
          ></SubMenu>
          <SubMenu
            key="sub2"
            icon={<AntDesignOutlined />}
            title="关于我们"
          ></SubMenu> */}
          {/* <SubMenu key="sub3" icon={<StarOutlined />} title="我的收藏">
            <Menu.ItemGroup key="g1" title="阿里巴巴">
              <Menu.Item key="m1">
                <AlipayOutlined /> 支付宝
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout>
        <Header className="layout-header-classname"></Header>
        <Content
          className="layout-content-classname"
          style={{ margin: '12px', padding: 12, backgroundColor: '#FFFFFF' }}
        >
          {/* <Link to="/page1">点击我跳转到page1</Link>
          <NavLink to="/page1">点我啊</NavLink>
          <Button onClick={handleClickLink}>点击我也可以</Button> */}
          {props.children}
        </Content>
        <Footer className="layout-footer-classname">
          react-ts-antd-umi @2021 Create by 华唐
        </Footer>
      </Layout>
    </Layout>
  );
};

export default index;
