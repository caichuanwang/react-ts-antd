import React from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { history } from 'umi';

export default (props: any) => {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h2>{props.location.query.id}</h2>
      <Button
        onClick={() => {
          history.goBack();
        }}
      >
        点击返回
      </Button>
    </div>
  );
};
