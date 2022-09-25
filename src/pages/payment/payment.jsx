import React, { useEffect, useState,useContext } from 'react'
import { Card, Row, Col, Typography, Button, Select, Image, Form, Input, Space, Table, Tag, notification } from 'antd';
import './index.scss'
import { addDonHang, fetchDistrictApi, fetchProvinceApi } from '../../services/list';
import TextArea from 'antd/lib/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { LoadingContext } from '../../contexts/loading.context';

const { Option } = Select;
const { Text } = Typography;

export default function Payment() {
    const [componentSize, setComponentSize] = useState('large');
    const [total, setTotal] = useState(0);
    const [district, setDistrict] = useState();
    const buyItem = useSelector(state => state.clothReducer.buyItem);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loadingState, setLoadingState] = useContext(LoadingContext);
    
    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'Name',
            key: 'Name',
            render: (text, record) => <p>{text} x {record.Quatity}</p>,
        },
        {
            title: 'Tạm tính',
            dataIndex: 'Price',
            key: 'Price',
            align: 'right',
            render: (text, record) => <p>{(text * record.Quatity).toLocaleString()} VND</p>,
        },

    ];

    const handleSubmit = async (values) => {
        values.Address = values.detail + ' ' + values.ward + ' ' + values.District + ' ' + values.Province;
        values.Item = buyItem;
        values.Total = total;
        delete values.detail;
        delete values.ward;
        delete values.District;
        delete values.Province;
        values.date = new Date();
        values.code = 'DADU' + Math.floor((Math.random() * 10000) + 1);

        dispatch({
            type: 'CONFIRM',
            payload: values,
        })

        dispatch({
            type: 'RESET_ITEM',
            payload: [],
        })
        setLoadingState({isLoading : true});
        await addDonHang(values);
        setLoadingState({isLoading : false});

        notification.success({
            message: 'Đã đặt hàng thành công'
        })
        navigate('/thankyou')
    }

    const data = buyItem;
    return (
        <Row className='payment container'>
            <Col span={24}><h3 className='text-center'>THANH TOÁN VÀ GIAO HÀNG</h3></Col>

            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <h4>Thông tin khách hàng</h4>
                <Form
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 23,
                    }}
                    layout="horizontal"
                    initialValues={{
                        size: componentSize,
                    }}
                    size={componentSize}
                onFinish={handleSubmit}
                >
                    <Form.Item name="Name"  rules={[
                        {
                            required: true,
                            message: `Xin vui lòng nhập họ tên`,
                        },
                        {
                            whitespace:true,
                            message: `Xin vui lòng nhập họ tên`,
                        }
                    ]}>
                        <Input placeholder='Họ tên' />
                    </Form.Item>
                    <Form.Item name="Phone" rules={[
                        {
                            required: true,
                            message: `Xin vui lòng nhập số điện thoại`,
                        },
                        {
                            whitespace:true,
                            message: `Xin vui lòng nhập số điện thoại`,
                        }
                    ]}>
                        <Input type="number" placeholder='Số điện thoại' />
                    </Form.Item>

                    <Form.Item name="Province" rules={[
                        {
                            required: true,
                            message: `Xin vui lòng nhập tỉnh / thành phố`,
                        },
                        {
                            whitespace:true,
                            message: `Xin vui lòng nhập tỉnh / thành phố`,
                        }
                    ]}>

                        <Input placeholder='Tỉnh/ thành phố' />
                    </Form.Item>

                    <Form.Item name="District" rules={[
                        {
                            required: true,
                            message: `Xin vui lòng nhập quận / huyện`,
                        },
                        {
                            whitespace:true,
                            message: `Xin vui lòng nhập quận / huyện`,
                        }
                    ]}>
                        <Input placeholder='Quận/ huyện' />
                    </Form.Item>

                    <Form.Item name="ward" rules={[
                        {
                            required: true,
                            message: `Xin vui lòng nhập phường / xã`,
                        },
                        {
                            whitespace:true,
                            message: `Xin vui lòng nhập phường / xã`,
                        }
                    ]}>
                        <Input placeholder='Phường/ xã' />
                    </Form.Item>

                    <Form.Item name="detail" rules={[
                        {
                            required: true,
                            message: `Xin vui lòng nhập số nhà, tên đường, khu phố, thôn, ấp,...`,
                        },
                        {
                            whitespace:true,
                            message: `Xin vui lòng nhập số nhà, tên đường, khu phố, thôn, ấp,...`,
                        }
                    ]}>
                        <Input placeholder='Số nhà, tên đường, khu phố, thôn, ấp,...' />
                    </Form.Item>
                    <h4>Thông tin bổ sung</h4>
                    <p>Ghi chú đơn hàng (không bắt buộc)</p>
                    <Form.Item name="Memo">
                        <TextArea placeholder='Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn.' />
                    </Form.Item>
                    <Form.Item>
                        <Button className='w-100 text-light bg-dark' htmlType='submit'>Mua hàng</Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <div className="site-card-border-less-wrapper">
                    <Card title="ĐƠN HÀNG CỦA BẠN" bordered={true} style={{ width: '100%' }}>
                        <Table columns={columns} dataSource={data} pagination={false} summary={(pageData) => {
                            const total1 = 20000 + pageData.reduce((total, ele) => {
                                total += (ele.Quatity * ele.Price);
                                return total;
                            }, 0) * 1;
                            setTotal(total1);
                            return (
                                <>
                                    <Table.Summary.Row>
                                        <Table.Summary.Cell index={0}>Phí ship</Table.Summary.Cell>
                                        <Table.Summary.Cell className='text-right' index={1}>
                                            <Text>20,000 VND</Text>
                                        </Table.Summary.Cell>
                                    </Table.Summary.Row>
                                    <Table.Summary.Row>
                                        <Table.Summary.Cell index={2}><b>Total</b></Table.Summary.Cell>
                                        <Table.Summary.Cell className='text-right' index={3}>
                                            <Text type="danger">{total.toLocaleString()} VND</Text>
                                        </Table.Summary.Cell>
                                    </Table.Summary.Row>
                                </>
                            );
                        }} />
                    </Card>
                </div>
            </Col>
        </Row>
    )
}
