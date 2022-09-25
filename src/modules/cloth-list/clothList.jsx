import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button } from 'antd';
import './index.scss'
import { listApi } from '../../services/list';
import { LoadingContext } from '../../contexts/loading.context';
const { Meta } = Card;


export default function ClothList() {
    const [list, setList] = useState();
    const navigate = useNavigate();
    const [loadingState, setLoadingState] = useContext(LoadingContext);

    useEffect(() => {

        fetchList();

    }, [])

    const fetchList = async () => {
        setLoadingState({ isLoading: true });
        const result = await listApi();
        setLoadingState({ isLoading: false });
        setList(result.data);
    }

    const onClickShirt = (id) => {
        navigate(`cloth/${id}`);
    }

    const renderListDataShirt = (type) => {
        let ishirt = -1;
        return list?.map((ele, index) => {
            if (ele.Type === type) {
                ishirt++;
                if (ishirt < 7) {
                    return <Col key={ele.id} xs={12} sm={12} md={12} lg={8} xl={6} className='mb-4 p-2'>
                        <Card className='card'
                            hoverable
                            // style={{
                            //     width: 240,
                            // }}
                            cover={<img alt="example" src={ele.Img[0]}
                                onClick={() => {
                                    onClickShirt(ele.id)
                                }} />}
                        >
                            <Meta title={ele.Name} description={`Giá: ${(ele.Price).toLocaleString()} VND`} />
                            <Button onClick={() => {
                                onClickShirt(ele.id)
                            }} className='choose' type="primary"><i class="fa-solid fa-cart-shopping"></i></Button>
                        </Card>
                    </Col>
                }
            }
        })
    }

    return (
        <>
            <h2 className='text-center mt-5'>Áo thun</h2>
            <Row className='container'>
                {renderListDataShirt('ao')}
                <Col  xs={12} sm={12} md={12} lg={8} xl={6} className='mb-4 p-2'>
                    <Button onClick={() => {
                        navigate('/shirt')
                    }} style={{width: '100%', height: '100%' }}>Xem thêm . . .</Button>
                </Col>
            </Row>
            <hr />
            <h2 className='text-center'>Quần</h2>
            <Row className='container mb-5'>
                {renderListDataShirt('quan')}
                <Col  xs={12} sm={12} md={12} lg={8} xl={6} className='mb-4 p-2'>
                    <Button onClick={() => {
                        navigate('/trouser')
                    }} style={{width: '100%',height: '100%' }}>Xem thêm . . .</Button>
                </Col>
            </Row>
            <hr />
            <h2 className='text-center'>Phụ kiện</h2>
            <Row className='container mb-5'>
                {renderListDataShirt('phuKien')}
                <Col  xs={12} sm={12} md={12} lg={8} xl={6} className='mb-4 p-2'>
                    <Button onClick={() => {
                        navigate('/trouser')
                    }} style={{width: '100%',height: '100%' }}>Xem thêm . . .</Button>
                </Col>
            </Row>
        </>
    )
}
