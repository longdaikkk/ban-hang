import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Space, Table, Tag, notification } from 'antd';
import { addDonHangDaXuLy, deleteApi, deleteDonHang, fetchDonHang, listApi } from '../../../services/list';
import { useNavigate } from 'react-router-dom';
import './index.scss'
export default function DonHang() {
  const [data, setData] = useState();

  const columns = [
    {
      title: 'Họ tên',
      dataIndex: 'Name',
      key: 'Name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'Phone',
      key: 'Phone',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'Address',
      key: 'Address',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Mã đơn',
      dataIndex: 'code',
      key: 'code',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'Product',
      key: 'Product',
      render: (text, record) => {
        return record.Item.map((ele) => {
          return <p>{ele.Name}  <img src={ele.Img} style={{ width: '10%' }} />'{ele.Color}' '{ele.Size}' x {ele.Quatity} = {(ele.Quatity * ele.Price).toLocaleString()}</p>
        })
      },
    },
    {
      title: 'Tổng',
      dataIndex: 'Total',
      key: 'Total',
      render: (text) => <a>{text.toLocaleString()} đ</a>,
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      render: (text, record) => <Button type='primary' onClick={async () => {
        notification.success({
          message: "Đợi tý"
        })
        await deleteDonHang(record.id);
        fetchListDonHang();
        await addDonHangDaXuLy(record);
        notification.success({
          message: "Đã xử lý"
        })
      }}>Chưa xử lý</Button>,
    },
    {
      title: 'Ghi chú',
      dataIndex: 'Memo',
      key: 'Memo',
      render: (text) => <a>{text}</a>,
    },
  ]

  useEffect(() => {
    fetchListDonHang();
  }, [])

  const fetchListDonHang = async () => {
    const result = await fetchDonHang();
    setData(result.data);
    console.log(result.data);
  }
  return (
    <>
      <h1>Đơn hàng chưa xử lý</h1>
      <Table columns={columns} dataSource={data} />
    </>
  )
}
