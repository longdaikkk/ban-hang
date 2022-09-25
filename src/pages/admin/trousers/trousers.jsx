import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Space, Table, Tag } from 'antd';
import { deleteTrouserApi, listTrouserApi } from '../../../services/list';
import { useNavigate } from 'react-router-dom';

export default function Trousers() {
    const [data, setData] = useState();
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'Id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Tên',
      dataIndex: 'Name',
      key: 'Name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'Img',
      key: 'Img',
      render: (text, record) => {
        console.log(record);
        return (
          <Row style={{width: '250px'}}>
            {
              text.map((ele) => {
                return <Col span={6}>
                  <img className='img-fluid' src={ele}/>
                </Col>
              })
            }
          </Row>
        )
      },
    },
    {
      title: 'Mô tả',
      dataIndex: 'Descris',
      key: 'Descris',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Giá bán',
      dataIndex: 'Price',
      key: 'Price',
    },
    {
      title: 'Đã bán',
      dataIndex: 'Sold',
      key: 'Sold',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => {
            handleDelete(record.id);
          }} type='danger'>Xóa</Button>
          <Button type='primary'>Sửa</Button>
        </Space>
      ),
    },
  ];
  
  useEffect(() => {
    fetchListShirt();
  }, [])

  const fetchListShirt = async () => {
    const result = await listTrouserApi();
    setData(result.data);
    console.log(result);
  }

  const handleDelete = async (id) => {
    await deleteTrouserApi(id);

    fetchListShirt();
  }
  return (
    <>
    <h1>Danh sách quần</h1>
    <Button onClick={() => {
      navigate('/admin/addItem')
    }} className='my-3' type='primary'>Thêm sản phẩm</Button>
    <Table columns={columns} dataSource={data} />
    </>
  )
}
