/*
 * @Descripttion:
 * @version: 1.0
 * @Author: ekko
 * @Date: 2021-01-20 09:22:09
 * @LastEditors: ekko
 * @LastEditTime: 2021-01-20 17:26:28
 */
import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import { useDispatch } from 'umi';

interface IndexProps {}

interface IndexState {}

class Index extends React.Component<IndexProps, IndexState> {
  fetch = () => {
    const { dispatch }: any = this.props;
    dispatch({
      type: 'counts/addCount',
      payload: 23456,
      callback: (res: any) => {
        console.log('callback:' + res);
      },
    });
  };

  render() {
    console.log(this.props);
    const { counts }: any = this.props;
    return (
      <div>
        <Button onClick={this.fetch}>点击我把</Button>
        <h1>{counts.count}</h1>
      </div>
    );
  }
}

// export default Index;

// const index = (props:any) => {
//   const dispatch = useDispatch()
//   const {counts} = props
//   console.log(counts,'852');
//   const fetch = () => {
//     dispatch:{
//       type:'counts/addCount'
//       payload:2
//     }
//     console.log('点击了');
//   }
//   return <div>
//     <Button onClick={fetch}>点击我把</Button>
//     <h1>{counts.count}</h1>
//   </div>;
// };

export default connect(({ counts }: any) => ({ counts }))(Index);
