import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Button, Result } from 'antd';

export const ErrorBoundary = () => {
  const error = useRouteError() as { message: string };
  console.log(error, 'error');
  const navigate = useNavigate();
  return (
    <Result
      status="500"
      title="500"
      subTitle={error.message || '出错啦!'}
      extra={
        <Button type="primary" onClick={() => navigate(-1)}>
          返回上一页
        </Button>
      }
    />
  );
};
