import React, { useEffect, useState, useContext } from 'react'
import { Card, Row, Col, Button, Select, Image, Form, message } from 'antd';

import './index.scss';
import { useDispatch } from 'react-redux';
import { detailApi} from '../../services/list';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingContext } from '../../contexts/loading.context';

const { Option } = Select;

export default function Descristion({state}) {
    const navigate = useNavigate();
    const [selectChoose, setSelectChoose] = useState();
    const [componentSize, setComponentSize] = useState('default');
    const [quatity, setQuatity] = useState(1);
    const params = useParams();
    const dispatch = useDispatch();
    const [loadings, setLoadings] = useState([]);
    const info = () => {
        message.info('Đã thêm vào giỏ hàng');
    };
    const [loadingState, setLoadingState] = useContext(LoadingContext);

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 1000);
    };

    useEffect(() => {   
        fetchDetail();
    }, [])

    const fetchDetail = async () => {
        setLoadingState({isLoading : true});
        const result = await detailApi(params.id);
        setSelectChoose(result.data);
        setLoadingState({isLoading : false});
    }

    const handleSubmit = (values) => {
        enterLoading(1);
        info();

        values.Quatity = quatity;
        values.Name = selectChoose.Name;
        values.Price = selectChoose.Price;
        values.Img = selectChoose.Img[0];

        dispatch({
            type: "BUY_ITEM",
            payload: values,
        })

        navigate(`/cloth/${params.id}`);

    }

    return (
        <Row className='detail'>
            <Col span={12} className="p-3">
                <img className='img-fluid mb-4' src={selectChoose?.Img[0]} />
                <Row className="d-flex justify-content-between">
                    {
                        selectChoose?.Img.map((ele) => {
                            return <Col span={6} className="p-1">
                                <Image className='img-fluid' src={ele} alt="" srcset="" />
                            </Col>
                        })
                    }

                </Row>
            </Col>
            <Col span={12} className="p-3">
                <h1>{selectChoose?.Name}</h1>
                <p>Giá: {(selectChoose?.Price)?.toLocaleString()} VND</p>
                <p>{selectChoose?.Descris}</p>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="vertical"
                    initialValues={{
                        size: componentSize,
                    }}
                    size={componentSize}
                    onFinish={handleSubmit}
                >
                    <Form.Item name="Color" rules={[
                        {
                            required: true,
                            message: `Xin vui lòng chọn màu`,
                        },
                    ]}>
                        <Select
                            defaultValue=""
                            style={{
                                width: '50%',
                            }}

                        >
                            <Option value="">Chọn màu</Option>
                            {
                                selectChoose?.Color.map((ele) => {
                                    return <Option value={ele}>{ele}</Option>
                                })
                            }
                        </Select>
                    </Form.Item>
                    {selectChoose?.Type != 'phuKien' && <Form.Item name="Size" rules={[
                        {
                            required: true,
                            message: `Xin vui lòng chọn size`,
                        },
                    ]}>
                        <Select
                            className='ml-1'
                            defaultValue=""
                            style={{
                                width: '50%',
                            }}

                        >
                            <Option value="">Chọn size</Option>
                            {
                                selectChoose?.Size.map((ele) => {
                                    return <Option value={ele}>{ele}</Option>
                                })
                            }
                        </Select>
                    </Form.Item>
                    }
                    <div className='mt-4'>
                        <Button onClick={() => {
                            if (quatity > 0) {
                                setQuatity(quatity - 1);
                            }
                        }}><b>-</b></Button>
                        <span> {quatity} </span>
                        <Button onClick={() => {
                            setQuatity(quatity + 1);
                        }}><b>+</b></Button>
                        <Button
                            loading={loadings[1]}
                            htmlType='submit'
                            className='m-1'
                            type='primary'>
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row >
    )
}
