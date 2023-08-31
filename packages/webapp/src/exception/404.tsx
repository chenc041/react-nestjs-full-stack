import React from 'react';
import { Button, Result } from 'antd';

export const NotFoundPage = () => {
  return <Result status="404" title="404" subTitle="对不起, 您访问的页面不存在" extra={<Button type="primary">返回上一页</Button>} />;
};
