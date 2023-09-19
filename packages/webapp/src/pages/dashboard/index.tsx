import React from 'react';
import { Table } from 'antd';
import styles from '~/pages/dashboard/index.scss';

export default () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌 12',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖 90',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div className={styles.dashboard}>
      <Table dataSource={dataSource} columns={columns} bordered />
    </div>
  );
};
