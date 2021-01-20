import React from 'react';
import { Table } from 'antd';

export interface IndexProps {}

export interface IndexState {}

class Index extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props);
    this.state = { selectedRowKeys: [], list: [] };
  }
  render() {
    const { selectedRowKeys } = this.state;
    return (
      <div>
        <Table>
          <Table.Column
            align="center"
            title="课程类别"
            dataIndex="courseType"
          ></Table.Column>
          <Table.Column
            align="center"
            title="课程名称"
            dataIndex="courseName"
          ></Table.Column>
          <Table.Column
            align="center"
            title="课程总价"
            dataIndex="courseCount"
          ></Table.Column>
          <Table.Column
            align="center"
            title="课程数量"
            dataIndex="courseNum"
          ></Table.Column>
          <Table.Column
            align="center"
            title="课程地址"
            dataIndex="courseAddress"
          ></Table.Column>
          <Table.Column
            title="操作"
            key="action"
            render={(text: string, record: any, index: number) => {
              console.log(text, record, index);
            }}
          ></Table.Column>
        </Table>
      </div>
    );
  }
}

export default Index;
