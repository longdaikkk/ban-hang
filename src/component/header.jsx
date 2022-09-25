import React, { useEffect, useState } from 'react'
import './style.scss'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Header() {
    const navigate = useNavigate();
    const buyItem = useSelector(state => state.clothReducer.buyItem);

    return (
        <header id="header">
            {/* <nav className="navbar navbar-expand-md container animate__animated animate__fadeIn">
                <NavLink className="navbar-brand" to="/">
                    DADU
                </NavLink>
                <div className='d-flex'>
                    <button onClick={() => {
                        navigate('/order')
                    }} className="fa-solid fa-cart-shopping fa-2x text-light btn position">
                        <span className='quatity'>
                            {buyItem.length}
                        </span>
                    </button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse ml-auto navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="#">ÁO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">QUẦN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PHỤ KIỆN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">KHUYẾN MÃI</a>
                        </li>
                        <li className="nav-item mx-4 mt-2">
                            <a className="nav-phone" href="#"><i className="fa-solid fa-phone-flip" /> 0388-996-419</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-icon" href="#">
                                <i className="fa-brands fa-facebook-f" />
                                <i className="fa-brands fa-youtube" />
                                <i className="fa-brands fa-instagram" />
                            </a>
                        </li>
                    </ul>

                </div>
            </nav> */}
            <nav className="navbar navbar-expand-md navbar-dark">
                {/* Toggler/collapsibe Button */}
                <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Brand */}
                <NavLink className="navbar-brand mx-auto" to="/">
                    DADU
                </NavLink>
                

                
                {/* Navbar links */}
                <div className="navLink navbar-collapse d-flex">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/shirt">ÁO THUN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/trouser">QUẦN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/accessory">PHỤ KIỆN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/promotion">KHUYẾN MÃI</NavLink>
                        </li>
                        <li className="nav-item mx-4 mt-2">
                            <a className="nav-phone"><i className="fa-solid fa-phone-flip" /> 0388-996-419</a>
                        </li>
                        
                    </ul>
                </div>
                <button onClick={() => {
                        navigate('/order')
                    }} className="fa-solid fa-cart-shopping fa-2x text-light btn position">
                        <span className='quatity'>
                            {buyItem.length}
                        </span>
                </button>
                <div className="collapse navbar-collapse"  id="collapsibleNavbar">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/shirt">ÁO THUN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/trouser">QUẦN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/accessory">PHỤ KIỆN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/promotion">KHUYẾN MÃI</NavLink>
                        </li>
                        <li className="nav-item mx-4 mt-2">
                            <a className="nav-phone"><i className="fa-solid fa-phone-flip" /> 0388-996-419</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}
