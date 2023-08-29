import React from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
  const error = useRouteError();
  console.log(error, 'error');
  return <div>ErrorBoundary</div>;
};
