import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { addCourse, Response, Course } from '@/utils/type';
import { getCourseTypeList, test, add, query, edit } from '@/services/api';
import { history, useParams } from 'umi';

const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const addCourseFun = (props: any) => {
  const { id } = props.match.params;
  const [form] = Form.useForm();

  const [typeList, setTypeList] = useState<addCourse[]>([] as addCourse[]);

  useEffect(() => {
    getCourseTypeList().then((res: Response) => {
      setTypeList(res.data as addCourse[]);
    });
    test().then((res: any) => {
      console.log(res);
    });
    query({ id: props.match.params.id }).then((res: Response) => {
      form.setFieldsValue(...res.data);
    });
  }, []);

  const onFinish = (values: object) => {
    if (id) {
      edit({ ...values, id }).then((res: Response) => {
        if (res && res.success) {
          history.push('/course/list');
          message.success(res.message);
        } else {
          message.error('编辑失败');
        }
      });
    } else {
      add(values).then((res: Response) => {
        if (res && res.success) {
          history.push('/course/list');
          message.success(res.message);
        } else {
          message.error('添加失败');
        }
      });
    }
  };

  return (
    <>
      <Form {...layout} name="basic" onFinish={onFinish} form={form}>
        <Form.Item
          label="课程类别"
          name="courseType"
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
          name="courseName"
          rules={[{ required: true, message: '请输入课程名称!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="课程总价"
          name="courseCount"
          rules={[{ required: true, message: '请输入课程总价!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="课程数量"
          name="courseNum"
          rules={[{ required: true, message: '请输入课程数量!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="课程地址"
          name="courseAddress"
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
