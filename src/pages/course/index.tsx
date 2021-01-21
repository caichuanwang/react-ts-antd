/*
 * @Descripttion:
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-01-20 09:22:09
 * @LastEditors: ekko
 * @LastEditTime: 2021-01-21 17:37:44
 */
import React from 'react';
import { Table, Button, Pagination } from 'antd';

export interface IndexProps {}

export interface IndexState {
  data: Array<Object>;
  selectedRowKeys: Array<Object>;
}
interface Course {
  // key: number;
  // name: string;
}

class Index extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      data: [
        {
          courseType: 'vue',
          courseName: 'vue实战',
          courseCount: '100',
          courseNum: '200',
          courseAddress: 'https://vue.org',
        },
        {
          courseType: 'vue',
          courseName: 'vue实战',
          courseCount: '100',
          courseNum: '200',
          courseAddress: 'https://vue.org',
        },
      ],
    };
  }
  getData = () => {
    let arr: Array<Object> = [];
    for (let index = 0; index < 100; index++) {
      const element = {
        courseType: `类型${index}`,
        courseName: `类型${index}实战`,
        courseCount: index,
        courseNum: index,
        courseAddress: 'https://vue.org',
      };
      arr.push(element);
    }
    this.setState({
      data: arr,
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    // const { selectedRowKeys } = this.state;
    return (
      <div>
        <Table
          dataSource={this.state.data}
          pagination={{
            position: ['bottomRight'],
            showQuickJumper: true,
            defaultCurrent: 1,
            defaultPageSize: 1,
            pageSizeOptions: ['1', '20', '50', '100'],
            showSizeChanger: true,
          }}
        >
          <Table.Column
            align="center"
            title="课程类别"
            key="courseType"
            dataIndex="courseType"
          ></Table.Column>
          <Table.Column
            align="center"
            title="课程名称"
            key="courseName"
            dataIndex="courseName"
          ></Table.Column>
          <Table.Column
            align="center"
            title="课程总价"
            key="courseCount"
            dataIndex="courseCount"
          ></Table.Column>
          <Table.Column
            align="center"
            title="课程数量"
            key="courseNum"
            dataIndex="courseNum"
          ></Table.Column>
          <Table.Column
            align="center"
            title="课程地址"
            key="courseAddress"
            dataIndex="courseAddress"
          ></Table.Column>
          <Table.Column
            title="操作"
            key="action"
            align="center"
            render={(text: string, record: any, index: number) => {
              console.log(text, record, index, '789');
              return (
                <div>
                  <Button type="text">详情</Button>
                  <Button type="text">编辑</Button>
                </div>
              );
            }}
          ></Table.Column>
        </Table>
      </div>
    );
  }
}

export default Index;
