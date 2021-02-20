import Axios, { AxiosResponse } from 'axios';
import { Response } from '@/utils/type';

function checkRes(res: { data: Response; status: number }): Response {
  if (res.status >= 200 && res.status <= 300) {
    console.log('11', { ...res.data });
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
