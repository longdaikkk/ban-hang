import React from 'react'
import './style.scss'

export default function Footer() {
  return (
    <footer>
  <div className="container">
    <div className="row d-flex justify-content-between">
      <div className="col-sm-6 col-md-6 col-lg-6 animate__fadeIn animate__animated wow">
        <h3 className='text-light'>DADU</h3>
        <p><i className="fa-solid fa-location-dot" /> 1365/10 Huỳnh Tấn Phát, Phú Thuận, Quận 7, TPHCM.</p>
        <p><i className="fa-solid fa-phone-flip" /> Hotline: 0388996419</p>
        <p><i class="fa-regular fa-envelope"></i> dadu@gmail.com</p>
        <div className="footer_icon">
          <i className="fa-brands fa-facebook-f" />
          <i className="fa-brands fa-youtube" />
          <i className="fa-brands fa-instagram" />
        </div>
      </div>
      
      <div className="col-sm-6 col-md-6 col-lg-3 animate__fadeIn animate__animated delay-2 wow">
        <h3 className='text-light'>Kết nối với Dadu</h3>
        <img className='img-fluid' src="./img/code.jpg"/>
      </div>
      
    </div>
  </div>
</footer>

  )
}
