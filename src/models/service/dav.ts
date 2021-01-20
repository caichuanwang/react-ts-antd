/*
 * @Descripttion:
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-01-20 14:02:56
 * @LastEditors: ekko
 * @LastEditTime: 2021-01-20 16:05:31
 */
import axios from 'axios';
export async function getCounts(params: any) {
  return await axios
    .get('/api/list')
    .then((res) => {
      console.log(res, 'res');
      return res.data.count;
    })
    .catch((e) => {
      console.log(e);
    });
}
