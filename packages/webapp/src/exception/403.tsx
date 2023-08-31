import React from 'react';
import { Result, Button } from 'antd';

export const ForbiddenPage = () => {
  return <Result status="403" title="403" subTitle="对不起, 您没有权限访问这个页面" extra={<Button type="primary">返回上一页</Button>} />;
};
