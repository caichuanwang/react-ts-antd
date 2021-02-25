import { message } from '@umijs/plugin-request/lib/ui';

import { addCourse } from '@/utils/type';
/*
 * @Descripttion:
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-01-20 15:25:57
 * @LastEditors: ekko
 * @LastEditTime: 2021-01-20 17:06:46
 */
type CourseList = {
  id: number;
  courseType: string;
  courseName: string;
  courseCount: string;
  courseNum: string;
  courseAddress: string;
};

let courseList: Array<CourseList> = [
  {
    id: 1,
    courseType: 'react',
    courseName: '课程的名称',
    courseCount: '$23',
    courseNum: '99',
    courseAddress: 'http://baidu.com',
  },
  {
    id: 2,
    courseType: 'vue',
    courseName: '深入浅出vue',
    courseCount: '$2233',
    courseNum: '99',
    courseAddress: 'http://baidu.com',
  },
  {
    id: 3,
    courseType: 'webpack',
    courseName: 'webpack实战',
    courseCount: '$296',
    courseNum: '95',
    courseAddress: 'http://baidu.com',
  },
  {
    id: 4,
    courseType: 'nodejs',
    courseName: 'nodejs实战',
    courseCount: '$38',
    courseNum: '99',
    courseAddress: 'http://baidu.com',
  },
  {
    id: 5,
    courseType: 'antd',
    courseName: 'antd简介',
    courseCount: '$63',
    courseNum: '992',
    courseAddress: 'http://baidu.com',
  },
];

const getFilterList = (req: { url: string }, res: any) => {
  console.log('这是在客户端');
  console.log(req.url);
  const keywords: string = req?.url.split('?').slice(1)[0].split('=')[1];
  let filterList =
    keywords === '' || keywords === undefined
      ? courseList
      : courseList.filter((e: { courseType: string; courseName: string }) => {
          return (
            e.courseName.includes(keywords) || e.courseType.includes(keywords)
          );
        });
  res.send({
    success: true,
    data: filterList,
    keywords,
  });
};

const addCourses = (req: { body: CourseList }, res: any) => {
  let {
    courseType,
    courseName,
    courseCount,
    courseNum,
    courseAddress,
  } = req.body;
  courseList.unshift({
    id: Date.now(),
    courseType,
    courseName,
    courseNum,
    courseCount,
    courseAddress,
  });
  res.send({
    message: '添加成功',
    success: true,
  });
};

// 获取编辑课程的内容
const getOneList = (req: { body: { id: number } }, res: any) => {
  let { id } = req.body;
  let data = courseList.filter((e: CourseList) => {
    return e.id == id;
  });
  res.send({
    success: true,
    data,
  });
};

// 编辑课程
const editCourse = (req: { body: CourseList }, res: any) => {
  let { id } = req.body;
  let index = courseList.findIndex((item: CourseList) => {
    return item.id == id;
  });
  courseList[index] = { ...req.body };
  res.send({
    message: '编辑成功',
    success: true,
  });
};

// 删除课程
const delCourse = (req: { body: { id: number } }, res: any) => {
  let { id } = req.body;
  let index = courseList.findIndex((e: CourseList) => {
    return e.id == id;
  });
  let newCourseList = courseList.splice(index, 1);
  res.send({
    message: '删除成功',
    success: true,
  });
};

export default {
  'GET /api/list': getFilterList,
  '/api/dictionary/type': {
    data: [
      { label: 'React', value: 'React' },
      { label: 'Vue', value: 'Vue' },
      { label: 'Node', value: 'Node' },
      { label: 'uniapp', value: 'uniapp' },
    ],
  },
  'POST  /api/course/add': addCourses,
  'POST  /api/getOneList': getOneList,
  'POST /api/course/edit': editCourse,
  'POST /api/course/del': delCourse,
};
