import React, { useEffect, useState } from 'react';
import './App.css';
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import FormFC from './components/FormFC';

/**
 * 做一个todoList
 * title
 */

interface iprops {
  title: string;
  onSubmit: (values: string) => void;
}

interface listProps {
  status: boolean;
  time: string;
  text: string;
}

/**
 * 方式1
 */
function App1(props: iprops): JSX.Element {
  return <></>;
}

/**
 * 方式2
 */
const App: React.FC<iprops> = ({ title, onSubmit }) => {
  const [list, setlist] = useState<listProps[]>();
  useEffect(() => {
    setlist([
      {
        status: true,
        time: '2020-11-17',
        text: '今天要看ts',
      },
      {
        status: false,
        time: '2020-11-17',
        text: '明天再看，今天休息',
      },
      {
        status: true,
        time: '2020-11-17',
        text: '好吧好吧',
      },
    ]);
  }, []);
  const colums: ColumnProps<listProps>[] = [
    {
      dataIndex: 'status',
      title: '是否完成',
      key: 'status',
      render: (text, record, index) => (text ? '是' : '否'),
    },
    {
      dataIndex: 'time',
      title: '完成时间',
    },
    {
      dataIndex: 'text',
      title: '事项',
    },
  ];
  return (
    <>
      <h1>{title}</h1>
      <Table columns={colums} rowKey="time" dataSource={list} />
      <FormFC onSubmit={onSubmit} />
    </>
  );
};

export default App;
