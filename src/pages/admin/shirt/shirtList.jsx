import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Space, Table, Tag } from 'antd';
import { deleteApi, listApi } from '../../../services/list';
import { useNavigate } from 'react-router-dom';

export default function ShirtList({state}) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const columns = [
    {
      title: 'ID',
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
              text?.map((ele) => {
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
  }, [state])

  const fetchListShirt = async () => {
    const result = await listApi();
    console.log(result);
    const list = result.data.map(ele => {
      if(ele.Type === state){
        return ele;
      }
    })

    list.forEach((ele, idx )=> {
      if(!ele){
        delete list[idx]
      }
    });

    setData(list);
  }

  const handleDelete = async (id) => {
    await deleteApi(id);

    fetchListShirt();
  }

  const handleTitle = (state) => {
    if(state === 'ao'){
      return <h2 className='text-center'>Danh sách áo</h2>
    } else if(state === 'quan'){
      return <h2 className='text-center'>Danh sách quần</h2>
    } else if(state === 'phuKien'){
      return <h2 className='text-center'>Danh sách phụ kiện</h2>
    } else{
      return <h2 className='text-center'>Khuyến mãi</h2>
    }
  }

  return(
    <>
    {handleTitle(state)}
    <Button onClick={() => {
      navigate('/admin/addItem')
    }} className='my-3' type='primary'>Thêm sản phẩm</Button>
    <Table columns={columns} dataSource={data} />
    </>
  )
}
