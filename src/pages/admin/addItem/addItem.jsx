import React, { useState } from 'react'
import {
    Button,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Checkbox,
} from 'antd';
import { addItemApi, addItemTrouserApi } from '../../../services/list';
import { useNavigate } from 'react-router-dom';
const CheckboxGroup = Checkbox.Group;
const plainOptionsSize = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const plainOptionsColor = ['Đen', 'Đỏ', 'Vàng', 'Xanh Dương', 'Xanh Lá', 'Trắng', 'Xám', 'Hồng', 'Nâu'];
const defaultCheckedListSize = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const defaultCheckedListColor = ['Đen', 'Đỏ', 'Vàng', 'Xanh Dương', 'Xanh Lá', 'Trắng', 'Xám', 'Hồng', 'Nâu'];
const { TextArea } = Input;

export default function AddItem() {
    const [componentSize, setComponentSize] = useState('default');
    const navigate = useNavigate();

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const [checkedListSize, setCheckedListSize] = useState(defaultCheckedListSize);
    const [checkedListColor, setCheckedListColor] = useState(defaultCheckedListColor);

    const onChangeSize = (list) => {
        setCheckedListSize(list);
    };

    const onChangeColor = (list) => {
        setCheckedListColor(list);
    };

    const handleSubmit = async (values) => {

        const data = [];
        data.push(values.Img0, values.Img1, values.Img2, values.Img3);

        values.Img = data;
        values.Color = checkedListColor;
        values.Size = checkedListSize;

        delete values.Img0;
        delete values.Img1;
        delete values.Img2;
        delete values.Img3;
        
        await addItemApi(values);

        if (values.Type === 'ao') {
            navigate('/admin/shirt');
        } else if(values.Type === 'quan'){
            navigate('/admin/trousers');
        } else if(values.Type === 'phuKien'){
            navigate('/admin/accessory');
        }
    }

    return (
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
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            onFinish={handleSubmit}
        >
            <h1>Thêm sản phẩm</h1>
            <Form.Item name='Name' label="Tên sản phẩm">
                <Input />
            </Form.Item>

            <Form.Item label="Loại sản phẩm" name='Type'>
                <Select>
                    <Select.Option value="ao">Áo</Select.Option>
                    <Select.Option value="quan">Quần</Select.Option>
                    <Select.Option value="phuKien">Phụ kiện</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item label="Giá" name='Price'>
                <InputNumber />
            </Form.Item>

            <Form.Item label="Mô tả" name='Descris'>
                <TextArea rows={4} />
            </Form.Item>

            <div>
                <label>Size</label> <br />
                <CheckboxGroup options={plainOptionsSize} value={checkedListSize} onChange={onChangeSize} />
            </div>

            <div className='my-4'>
                <label>Màu</label> <br />
                <CheckboxGroup options={plainOptionsColor} value={checkedListColor} onChange={onChangeColor} />
            </div>

            <Form.Item label="Hình sản phẩm" name='Img0'>
                <Input />
            </Form.Item>

            <Form.Item name='Img1'>
                <Input />
            </Form.Item>

            <Form.Item name='Img2'>
                <Input />
            </Form.Item>

            <Form.Item name='Img3'>
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit'>Lưu</Button>
            </Form.Item>
        </Form>
    );
}
