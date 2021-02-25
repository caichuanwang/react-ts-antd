import Axios, { AxiosResponse } from 'axios';
import { Response } from '@/utils/type';

function checkRes(res: { data: Response; status: number }): Response {
  if (res.status >= 200 && res.status <= 300) {
    return { ...res.data };
  }
  return {
    data: [],
    success: false,
    keywords: '',
  };
}

export const getList = (params: object) => {
  return Axios.get('/api/list', {
    params,
  }).then(checkRes);
};

// 请求课程分类
export const getCourseTypeList = () => {
  return Axios.get('/api/dictionary/type').then(checkRes);
};

const p = new Promise(function (resolve, reject) {
  resolve('ceshi shuju ');
});
export const test: any = () => {
  return p.then((res) => {
    return {
      data: '123',
    };
  });
};

export const add = (params: object) => {
  return Axios.post('/api/course/add', params).then(checkRes);
};

// 查询课程
export const query = (params: object) => {
  return Axios.post('/api/getOneList', params).then(checkRes);
};
// 编辑课程
export const edit = (params: object) => {
  return Axios.post('/api/course/edit', params).then(checkRes);
};
// deltele course
export const del = (params: object) => {
  return Axios.post('/api/course/del', params).then((res: Response) => {
    return {
      ...res.data,
    };
  });
};
