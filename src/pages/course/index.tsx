/*
 * @Descripttion:
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-01-20 09:22:09
 * @LastEditors: ekko
 * @LastEditTime: 2021-01-21 17:37:44
 */
import React, { useState, useEffect } from 'react';
import { Table, Button, Pagination, Input, message } from 'antd';
import { del, getList } from '@/services/api';
import { Course, Response } from '@/utils/type';
import '@/styles/course.less';
import { history, Link } from 'umi';

const { Search } = Input;

function index(props: any) {
  const [data, setData] = useState<Course[]>([] as Course[]);
  const [keywords, setKeywords] = useState('');

  const columns = [
    {
      title: '课程类型',
      dataIndex: 'courseType',
      key: 'courseType',
    },
    {
      title: '名称',
      dataIndex: 'courseName',
      key: 'courseName',
    },
    {
      title: '课程价格',
      dataIndex: 'courseCount',
      key: 'courseCount',
    },
    {
      title: '课程数量',
      dataIndex: 'courseNum',
      key: 'courseNum',
    },
    {
      title: '课程地址',
      dataIndex: 'courseAddress',
      key: 'courseAddress',
    },
    {
      title: '操作',
      render: (record: { id: string }) => {
        return (
          <div>
            <Button type="text">
              <Link to={`/course/edit/${record.id}`}>编辑</Link>{' '}
            </Button>
            <Button
              type="text"
              onClick={() => {
                delCourse(record.id);
              }}
            >
              删除
            </Button>
          </div>
        );
      },
    },
  ];
  // deleter coures
  const delCourse = (id: string) => {
    del({ id }).then((res: any) => {
      if (res.success) {
        message.success('删除成功');
        getData({ keywords });
      }
    });
  };

  const getData = (params: object) => {
    getList(params).then((res: Response) => {
      setData(res.data as Course[]);
    });
  };
  const onSearch = (value: string) => {
    setKeywords(value);
  };

  const addHandle = () => {
    history.push('/course/add');
  };
  useEffect(() => {
    getData({ keywords });
  }, [keywords]);

  return (
    <>
      <div className="top-nav">
        <Search
          placeholder="请输入搜索内容"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        <Button type="primary" onClick={addHandle}>
          添加
        </Button>
      </div>
      <Table dataSource={data} columns={columns}></Table>
    </>
  );
}

export default index;

// export interface IndexProps {}

// export interface IndexState {
//   data: Array<Course>;
//   selectedRowKeys: Array<Object>;
//   keywords: string;
// }
// interface Course {
//   id: number;
//   courseType: string;
//   courseName: string;
//   courseCount: string;
//   courseNum: string;
//   courseAddress: string;
// }

// class Index extends React.Component<IndexProps, IndexState> {
//   constructor(props: IndexProps) {
//     super(props);
//     this.state = {
//       selectedRowKeys: [],
//       data: [],
//       keywords: '',
//     };
//   }
//   getData = (params: { keywords: string }) => {
//     Axios.get('/api/list', {
//       params,
//     }).then((res: any) => {
//       console.log(res);
//       this.setState({
//         data: res.data.data,
//       });
//     });
//   };

//   onSearch = async (value: string) => {
//     console.log(value);
//     await this.setState({
//       keywords: value,
//     });
//     console.log(this.state);
//     this.getData(this.state);
//   };

//   componentDidMount() {
//     this.getData(this.state);
//   }

//   render() {
//     return (
//       <div>
//         <Search
//           placeholder="请输入搜索内容"
//           allowClear
//           enterButton="Search"
//           size="large"
//           onSearch={this.onSearch}
//         />
//         <Table
//           dataSource={this.state.data}
//           rowKey={(record: any): string => {
//             console.log(record.id);
//             return `${record.id}`;
//           }}
//           pagination={{
//             position: ['bottomRight'],
//             showQuickJumper: true,
//             defaultCurrent: 1,
//             defaultPageSize: 20,
//             pageSizeOptions: ['1', '20', '50', '100'],
//             showSizeChanger: true,
//           }}
//         >
//           <Table.Column
//             align="center"
//             title="课程类别"
//             dataIndex="courseType"
//           ></Table.Column>
//           <Table.Column
//             align="center"
//             title="课程名称"
//             dataIndex="courseName"
//           ></Table.Column>
//           <Table.Column
//             align="center"
//             title="课程总价"
//             dataIndex="courseCount"
//           ></Table.Column>
//           <Table.Column
//             align="center"
//             title="课程数量"
//             dataIndex="courseNum"
//           ></Table.Column>
//           <Table.Column
//             align="center"
//             title="课程地址"
//             dataIndex="courseAddress"
//           ></Table.Column>
//           <Table.Column
//             title="操作"
//             align="center"
//             render={(text: string, record: { id: string }, index: number) => {
//               console.log(text, record, index, '789');
//               return (
//                 <div>
//                   <Button type="text">详情</Button>
//                   <Button type="text">编辑</Button>
//                 </div>
//               );
//             }}
//           ></Table.Column>
//         </Table>
//       </div>
//     );
//   }
// }

// export default Index;
