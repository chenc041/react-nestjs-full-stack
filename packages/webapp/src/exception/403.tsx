import React from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  return (
    <Result
      status="403"
      title="403"
      subTitle="对不起, 您没有权限访问这个页面"
      extra={
        <Button type="primary" onClick={() => navigate(-1)}>
          返回上一页
        </Button>
      }
    />
  );
};
