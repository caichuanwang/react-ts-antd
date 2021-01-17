import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MailOutlined,
  AntDesignOutlined,
  StarOutlined,
  AlibabaOutlined,
  AlipayOutlined,
} from '@ant-design/icons';
import './index.less';

const { Header, Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;

const index = () => {
  return (
    <Layout>
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
          <AlibabaOutlined />
        </div>
        {/* 这是sider */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          onClick={(e) => {
            console.log(e);
          }}
        >
          <SubMenu
            key="sub1"
            icon={<MailOutlined />}
            title="课程在线"
          ></SubMenu>
          <SubMenu
            key="sub2"
            icon={<AntDesignOutlined />}
            title="关于我们"
          ></SubMenu>
          <SubMenu key="sub3" icon={<StarOutlined />} title="我的收藏">
            <Menu.ItemGroup key="g1" title="阿里巴巴">
              <Menu.Item key="m1">
                <AlipayOutlined /> 支付宝
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className="layout-header-classname">这是header</Header>
        <Content
          className="layout-content-classname"
          style={{ margin: '24px 16px', padding: 24, minHeight: 'max-content' }}
        >
          这是Content
        </Content>
        <Footer className="layout-footer-classname"> by ekko</Footer>
      </Layout>
    </Layout>
  );
};

export default index;
