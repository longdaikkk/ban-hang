import React, { useEffect, useState } from 'react'
import './index.scss'
import { Space, Table, Tag, Col, Row, Card, Button, notification } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Order() {
    const buyItem = useSelector(state => state.clothReducer.buyItem);
    const navigate = useNavigate();
    const [state, setState] = useState([
        {
            Color: "",
            Img: "",
            Name: "",
            Price: "",
            Quatity: "",
            Size: "",
        }
    ]);

    useEffect(() => {
        setState(buyItem);
    }, [])
    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'Name',
            key: 'Name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'Img',
            key: 'Img',
            render: (text) => <img className='img-fluid' src={text} />
        },
        {
            title: 'Màu',
            dataIndex: 'Color',
            key: 'Color',
        },
        {
            title: 'Size',
            dataIndex: 'Size',
            key: 'Size',
        },
        {
            title: 'Số lượng',
            dataIndex: 'Quatity',
            key: 'Quatity',
        },

        {
            title: 'Thành tiền',
            dataIndex: 'TotalPrice',
            key: 'TotalPrice',
            render: (text, record) => <span>{(record.Price * record.Quatity).toLocaleString()} đ</span>
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => {
                        const data = [...buyItem]
                        const index = data.findIndex(ele => ele === record);
                        data.splice(index, 1);
                        buyItem.splice(index, 1);
                        setState(data);
                        notification.success({
                            message: 'Đã xóa ra khỏi giỏ hàng'
                        })
                        navigate('/order');
                    }} type='danger'>Xóa</Button>
                </Space>
            ),
        },
    ];
    console.log(state);

    return (
        <div className='order container'>
            <h1>Giỏ hàng</h1>
            {/* <p>{state}</p> */}
            <Row>
                <Col  xs={24} sm={24} md={24} lg={17} xl={17}>
                    <Table columns={columns} dataSource={state} bordered={true} />

                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} className="ml-3">
                    <Card title="Hóa đơn" bordered={true}>
                        <div className='d-flex justify-content-between'>
                            <h6>Tổng cộng: </h6>
                            <p>{
                                buyItem?.reduce((total, ele) => {
                                    total += (ele.Quatity * ele.Price);
                                    return total;
                                }, 0).toLocaleString()
                            } VND</p>
                        </div>

                        <Button disabled={buyItem.length > 0 ? false : true} onClick={() => {
                            navigate('/payment')
                        }} className='w-100 text-light bg-dark'>Đặt hàng</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
