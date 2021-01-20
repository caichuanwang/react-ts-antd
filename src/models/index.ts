/*
 * @Descripttion:
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-01-20 09:54:22
 * @LastEditors: ekko
 * @LastEditTime: 2021-01-20 17:11:25
 */
import { getCounts } from './service/dav';
// dva 通过 model 的概念把一个领域的模型管理起来，包含同步更新 state 的 reducers，
// 处理异步逻辑的 effects，订阅数据源的 subscriptions 。
export default {
  //dva 中的model概念的key，一般通过这个找到这个model并获取内容 ,这个 model 的名字，必须全局唯一
  namespace: 'counts',
  // state是初始化数据的地方
  state: {
    count: 1,
  },
  //effect 副作用 用于获取数据,一般用于向服务器发送请求获取数据
  effects: {
    // select 此方法用于获取当前或其他 model 的 state 。
    // call 此方法用于执行一个异步函数，可以理解为等待这个函数执行结束。项目中常用于发送 http 请求，等待服务端响应数据。
    // put 此方法用于触发一个 action，这个 action 既可以是一个 reducer 也可以是一个 effect 。
    *addCount({ payload, callback }: any, { call, put }: any) {
      console.log('effect');
      const response = yield call(getCounts, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) {
        callback(response);
      }
    },
  },
  // 用于修改数据
  // 每一个 reducer 都是一个普通函数，接受 state 和 action 作为参数，
  // 即：(state, action) => state ，你可以在函数中更改旧的 state，返回新的 state
  reducers: {
    save(state: any, actions: any) {
      console.log(state, actions, 'reducers');
      return { ...state, count: actions.payload };
    },
    save2(state: any, actions: any) {
      console.log(state, actions, 'reducers');
      return { ...state, count: actions.payload };
    },
  },
  // 用于订阅数据
  subscriptions: {},
};
