import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React from 'react'
const columns = [
  {
    title: 'Назва',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Ціна',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Кількість',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Дії',
    key: 'actions',
    render: (text, record) => (
      <div>
        {/* <button onClick={() => handleEdit(record)}>
          <EditOutlined />
        </button>
        <button onClick={() => handleDelete(record.id)}>
          <DeleteOutlined />
        </button> */}
      </div>
    ),
  },
];

const TableComponent = ({ data, handleEdit, handleDelete }) => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 10 }}
      rowKey={(record) => record.id}
    />
  );
};

export default TableComponent;
