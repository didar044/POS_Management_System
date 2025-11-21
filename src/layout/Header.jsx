import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../public/assets/myimg/logo.png';
import prologo from '../../public/assets/myimg/pos.jpg';
import logoSmall from '../../public/assets/myimg/logo-small.png';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await fetch('http://didar.intelsofts.com/Laravel_React/B_POS/public/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('token'); 
      navigate('/'); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="header">
      <div className="header-left active">
        <a href="./" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <a href="./" className="logo-small">
          <img src={logoSmall} alt="Small Logo" />
        </a>
        <a id="toggle_btn" href="javascript:void(0);"> </a>
      </div>

      <a id="mobile_btn" className="mobile_btn" href="#sidebar">
        <span className="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>

      <ul className="nav user-menu">
        <li className="nav-item">
          <div className="top-nav-search">
            <a href="javascript:void(0);" className="responsive-search">
              <i className="fa fa-search"></i>
            </a>
            <form action="#">
              <div className="searchinputs">
                <input type="text" placeholder="Search Here ..." />
                <div className="search-addon">
                  <span>
                    <img src="assets/img/icons/closes.svg" alt="img" />
                  </span>
                </div>
              </div>
              <a className="btn" id="searchdiv" href="javascript:void(0);">
                <i className="bi bi-search" style={{ fontSize: '20px', color: '#333' }}></i>
              </a>
            </form>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a
            href="javascript:void(0);"
            className="dropdown-toggle nav-link"
            data-bs-toggle="dropdown"
          >
            <i className="bi bi-bell" style={{ fontSize: '24px', color: '#6e5757' }}></i>
            <span className="badge rounded-pill">4</span>
          </a>
        </li>

        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="javascript:void(0);"
            className="dropdown-toggle nav-link userset"
            data-bs-toggle="dropdown"
          >
            <span className="user-img">
              <img src={prologo} alt="Smal" />
              <span className="status online"></span>
            </span>
          </a>
          <div className="dropdown-menu menu-drop-user">
            <div className="profilename">
              <div className="profileset">
                <span className="user-img">
                  <img src={prologo} alt="Smal" />
                  <span className="status online"></span>
                </span>
                <div className="profilesets">
                  <h6>John Doe</h6>
                  <h5>Admin</h5>
                </div>
              </div>
              <hr className="m-0" />
              <a className="dropdown-item" href="http://didar.intelsofts.com/">
                <i className="me-2" data-feather="user"></i> My Profile
              </a>
              <a className="dropdown-item" href="https://github.com/didar044/">
                <i className="me-2" data-feather="settings"></i>Settings
              </a>
              <hr className="m-0" />
              <a
                className="dropdown-item logout pb-0"
                onClick={handleLogout}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src="assets/img/icons/log-out.svg"
                  className="me-2"
                  alt="img"
                />
                Logout
              </a>
            </div>
          </div>
        </li>
      </ul>

      <div className="dropdown mobile-user-menu">
        <a
          href="javascript:void(0);"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="http://didar.intelsofts.com/">
            My Profile
          </a>
          <a className="dropdown-item" href="https://github.com/didar044/">
            Settings
          </a>
          <a className="dropdown-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};
