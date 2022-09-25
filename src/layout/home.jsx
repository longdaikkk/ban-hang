import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/header'
import Footer from '../component/footer'

export default function HomeLayout() {
    return (
        <>
            <Header></Header>

            <Outlet></Outlet>

            <Footer></Footer>
        </>
    )
}
