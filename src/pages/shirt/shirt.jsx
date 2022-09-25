import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button } from 'antd';
import './index.scss'
import { listApi } from '../../services/list';
import { LoadingContext } from '../../contexts/loading.context';
const { Meta } = Card;

export default function Shirt({state}) {
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
    navigate(`/cloth/${id}`);
  }

  const renderListDataShirt = (type) => {
    let ishirt = -1;
    return list?.map((ele, index) => {
      if (ele.Type === type) {
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
    })
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
  return (
    <div className='title'>
      {
        handleTitle(state)
      }
      <Row className='container'>
        {renderListDataShirt(state)}
      </Row>
    </div>
  )
}
