import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { addCourse, Response } from '@/utils/type';
import { getCourseTypeList, test } from '@/services/api';

const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const addCourseFun = (props: any) => {
  const [typeList, setTypeList] = useState<addCourse[]>([] as addCourse[]);

  useEffect(() => {
    getCourseTypeList().then((res: Response) => {
      setTypeList(res.data as addCourse[]);
    });
    test().then((res: any) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <Form {...layout} name="basic">
        <Form.Item
          label="课程类别"
          name="type"
          rules={[{ required: true, message: '请输入课程类别!' }]}
        >
          <Select>
            {typeList.map((e: { label: string; value: string }, i: number) => (
              <Option value={e.value} key={i}>
                {e.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="课程名称"
          name="name"
          rules={[{ required: true, message: '请输入课程名称!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="课程总价"
          name="totalPrice"
          rules={[{ required: true, message: '请输入课程总价!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="课程数量"
          name="amount"
          rules={[{ required: true, message: '请输入课程数量!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="课程地址"
          name="address"
          rules={[{ required: true, message: '请输入课程地址!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default addCourseFun;
