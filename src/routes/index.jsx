import React from 'react'
import {useRoutes} from 'react-router-dom'
import Admin from '../layout/admin'
import HomeLayout from '../layout/home'
import AddItem from '../pages/admin/addItem/addItem'
import DonHang from '../pages/admin/donHang/donHang'
import DonHangDaXuLy from '../pages/admin/donHangDaXyLy/donHangDaXyLy'
import ShirtList from '../pages/admin/shirt/shirtList'
import Trousers from '../pages/admin/trousers/trousers'
import Descristion from '../pages/decristion/descristion'
import Home from '../pages/home/home'
import Order from '../pages/order/order'
import Payment from '../pages/payment/payment'
import Shirt from '../pages/shirt/shirt'
import ThankYou from '../pages/thankYou/thankYou'

export default function Router() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeLayout/>,
            children: [
              {
                path: '/',
                element: <Home/>,
              },
              {
                path: '/cloth/:id',
                element: <Descristion state={1}/>,
              },
              {
                path: '/order',
                element: <Order/>
              },
              {
                path: '/payment',
                element: <Payment/>
              },
              {
                path: '/thankyou',
                element: <ThankYou/>
              },
              {
                path: '/shirt',
                element: <Shirt state={'ao'}/>
              },
              {
                path: '/trouser',
                element: <Shirt state={'quan'}/>
              },
              {
                path: '/accessory',
                element: <Shirt state={'phuKien'}/>
              },
              {
                path: '/promotion',
                element: <Shirt state={'khuyenMai'}/>
              },
            ]
        },
        {
          path: '/admin',
          element: <Admin/>,
          children:[
            {
              path: '/admin/shirt',
              element: <ShirtList state={'ao'}/>,
            },
            {
              path: '/admin/addItem',
              element: <AddItem/>,
            },
            {
              path: '/admin/donHang',
              element: <DonHang/>
            },
            {
              path: '/admin/donHangDaXuLy',
              element: <DonHangDaXuLy/>
            },
            {
              path: '/admin/trousers',
              element: <ShirtList state={'quan'}/>,
            },
            {
              path: '/admin/accessory',
              element: <ShirtList state={'phuKien'}/>,
            }
          ]
        }
    ])
  return (
    routing
  )
}
