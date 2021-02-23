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
};
