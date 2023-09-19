import React from 'react';
import { Result, Button } from 'antd';

export default () => {
  return <Result status="500" title="500" subTitle="对不起, 服务出错了" extra={<Button type="primary">返回上一页</Button>} />;
};
