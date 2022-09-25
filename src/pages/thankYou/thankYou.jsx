import { Space, Table, Tag } from 'antd';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './index.scss'
import moment from 'moment';

export default function ThankYou() {
    const state = useSelector(state => state.clothReducer.confirm);
    const [data, setData] = useState([state])
    const columns = [
        {
            title: 'Mã đơn hàng:',
            dataIndex: 'code',
            key: 'code',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Ngày:',
            dataIndex: 'date',
            key: 'date',
            render: (text, record) => <p>{moment(record.date).format('DD/MM/YYYY')}</p>,
        },
        {
            title: 'Tổng cộng:',
            dataIndex: 'Total',
            key: 'Total',
            render: (text) => <p>{text?.toLocaleString()} VND</p>,
        },
        {
            title: 'Phương thức thanh toán:',
            render: () => <p>Thanh toán khi nhận hàng (COD)</p>
        },
    ];

    return (
        <div className='thankYou container'>
            <h1 className='text-center'>Đặt hàng</h1>
            <p className='text-center camOn'>Cám ơn bạn đã mua hàng tại Dadu. Đơn hàng của bạn đã được xác nhận</p>
            <Table columns={columns} dataSource={data} pagination={false} />
            <p className='content bg-light'>Vui lòng thanh toán cho nhân viên giao hàng khi quý khách nhận hàng. <br />
                Quý khách được kiểm tra hàng.</p>
        </div>
    )
}
